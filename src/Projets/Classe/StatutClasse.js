import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { TableauEtudiants } from "./TableauEtudiants";

export function StatutClasse({ etudiants }) {
    const etudiantsSucces = etudiants.filter(etudiant => etudiant.note >= 6);
    const etudiantsEchec = etudiants.filter(etudiant => etudiant.note < 6);

    return (
        <Container>
            <Row>
                <Col lg>
                    <TableauEtudiants etudiants={etudiantsSucces} />
                </Col>
                <Col lg>
                    <TableauEtudiants etudiants={etudiantsEchec} />
                </Col>
            </Row>
        </Container>
    )
}