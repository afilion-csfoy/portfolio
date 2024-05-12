import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { Formulaire } from '../Projets/Formulaire/Formulaire.js';

export const PageFormulaire = () => {
    return (
        <>
            <h1>Formulaire</h1>
            <Formulaire />
            <Link to='/projets/horloge'>
                <Button variant="primary" className='mt-2'>Projet suivant</Button>
            </Link>
        </>
    )
}