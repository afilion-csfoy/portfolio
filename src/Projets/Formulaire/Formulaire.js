import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsCheck, BsX } from "react-icons/bs";

function AfficherMotDePasse(motDePasse) {
  alert(`Le mot de passe est ${motDePasse}`)
}

export function Formulaire() {
  const [motDePasse, setMotDePasse] = useState('');
  const [copieMotDePasse, setCopieMotDePasse] = useState('');

  function aMajuscule() {
    return motDePasse.toLocaleLowerCase() !== motDePasse;
  }

  function aChiffre() {
    const expressionReguliere = /\d+/;
    return motDePasse.match(expressionReguliere) !== null;
  }

  function sontIdentiques() {
    return (motDePasse === copieMotDePasse) && motDePasse.length !== 0;
  }

  let couleurAlertMotDePasse = "warning";
  if (aMajuscule() && aChiffre()) {
    couleurAlertMotDePasse = "success";
  }

  const couleurAlertIdentiques = sontIdentiques() ? "success" : "warning";
  const iconeMajuscule = aMajuscule() ? 
    <BsCheck className={"text-success"} /> : <BsX className={"text-danger"} />;
  const iconeAChiffre = aChiffre() ? 
    <BsCheck className={"text-success"} /> : <BsX className={"text-danger"} />;
  const iconeIdentiques = sontIdentiques() ? 
    <BsCheck className={"text-success"} /> : <BsX className={"text-danger"} />;

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formMotDePasse">
              <Form.Label>Entrez votre mot de passe :</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Entrez votre mot de passe"
                value={motDePasse}
                onChange={e => setMotDePasse(e.target.value)}
              />
            </Form.Group>

            <Alert variant={couleurAlertMotDePasse}>
              <ul>
                <li>Le mot de passe doit contenir une majuscule {iconeMajuscule}</li>
                <li>Le mot de passe doit contenir un chiffre {iconeAChiffre}</li>
              </ul> 
            </Alert>

            <Form.Group className="mb-3" controlId="formMotDePasseConfirmation">
              <Form.Label>Confirmez votre mot de passe :</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Confirmez votre mot de passe"
                value={copieMotDePasse}
                onChange={e => setCopieMotDePasse(e.target.value)} 
              />
            </Form.Group>

            <Alert variant={couleurAlertIdentiques}>
              <ul>
                <li>Le mot de passe doit être identique {iconeIdentiques}</li>
              </ul>
            </Alert>

            <Button 
              variant="primary" 
              type="submit" 
              onClick={() => AfficherMotDePasse(motDePasse)} 
              disabled={!(aMajuscule() && aChiffre() && sontIdentiques())}
            >
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}