import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Boutons } from "./Boutons";

export function Podometre() {
    const [compteur, setCompteur] = useState(0);

    const incrementer = () => setCompteur(compteur + 1);
    const decrementer = () => setCompteur(compteur > 0 ? compteur - 1 : 0);
    const reinitialiser = () => setCompteur(0);

    return (
      <Container>
        <Row>
          <Col>
            <h1>{compteur}</h1>
            <Boutons 
              incrementer={incrementer} 
              decrementer={decrementer} 
              remiseAZero={reinitialiser} />
          </Col>
        </Row>
      </Container>
    );
}