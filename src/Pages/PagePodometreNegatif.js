import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { PodometreNegatif } from '../Projets/Podometre/PodometreNegatif.js';

export const PagePodometreNegatif = () => {
    return (
        <>
            <h1>Podomètre négatif</h1>
            <PodometreNegatif />
            <Link to='/projets/ampoule'>
                <Button variant="primary" className='mt-2'>Projet suivant</Button>
            </Link>
        </>
    )
}