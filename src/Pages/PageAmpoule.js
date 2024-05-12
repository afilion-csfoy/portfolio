import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { Ampoule } from '../Projets/Ampoule/Ampoule.js';

export const PageAmpoule = () => {
    return (
        <>
            <h1>Ampoule</h1>
            <Ampoule />
            <Link to='/projets/formulaire'>
                <Button variant="primary" className='mt-2'>Projet suivant</Button>
            </Link>
        </>
    )
}