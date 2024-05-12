import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export function Ampoule() {
  const [estAllume, setEstAllume] = useState(false);

  let fichierImage = '/off.png';
  let etatInverse = 'ON';

  if (estAllume === true) {
    fichierImage = '/on.png';
    etatInverse = 'OFF';
  }


  return (
    <Container>
      <Row>
        <Col>
          <img src={fichierImage} height="439" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => setEstAllume(!estAllume)}>Mettre l'ampoule à {etatInverse}</Button>
        </Col>
      </Row>
    </Container>
  );
}