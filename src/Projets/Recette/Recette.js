import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Entete } from './Entete.js';
import { Ingredients } from './Ingredients.js';
import { Instructions } from './Instructions.js';

export function Recette({ recette }) {
    return (
      <>
        <Row>
          <Col>
            <Entete titre={recette.titre} description={recette.description} />
          </Col>
        </Row>
  
        <Row>
          <Col lg >
            <Ingredients ingredients={recette.ingredients} />
          </Col>
          <Col lg >
            <Instructions instructions={recette.instructions} />
          </Col>
        </Row>
      </>
    );
}