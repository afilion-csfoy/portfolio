import React from 'react';
import { Link, useParams, Navigate  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import { Recette } from '../Projets/Recette/Recette.js';
import { recettes } from '../recettes.js';

export const PageRecette = () => {
    const { identifiant } = useParams();
    const recetteCourante = recettes.find(recette => recette.id == identifiant);

    return (
        <>
            <h1>Recette</h1>
            {
                recetteCourante !== undefined ?
                    <Recette recette={recetteCourante} /> :
                    <Navigate to="/404" />
            }
            <Row>
                <Col>
                    <Link to='/projets/recette/567890'>
                        <Button variant="success" className='m-2'>Oeufs brouillés</Button>
                    </Link>
                    <Link to='/projets/recette/123456'>
                        <Button variant="success" className='m-2'>Latte chai</Button>
                    </Link>
                    <Link to='/projets/recette/234567'>
                        <Button variant="success" className='m-2'>Chocolatine</Button>
                    </Link>
                    <Link to='/projets/recette/345678'>
                        <Button variant="success" className='m-2'>Le pudding à l'arsenic</Button>
                    </Link>
                </Col>
            </Row>
            <Link to='/projets/podometre'>
                <Button variant="primary" className='mt-2'>Projet suivant</Button>
            </Link>
        </>
    )
}