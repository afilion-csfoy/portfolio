import React from "react";
import Table from 'react-bootstrap/Table';

export function TableauEtudiants({ etudiants }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Matricule</th>
                </tr>
            </thead>
            <tbody>
                {
                    etudiants.map(etudiant => {
                        return (
                            <tr key={etudiant.matricule}>
                                <td>{etudiant.nom}</td>
                                <td>{etudiant.matricule}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
    );
}