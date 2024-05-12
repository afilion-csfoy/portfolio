import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { Podometre } from '../Projets/Podometre/Podometre.js';

export const PagePodometre = () => {
    return (
        <>
            <h1>Podomètre</h1>
            <Podometre />
            <Link to='/projets/podometre-negatif'>
                <Button variant="primary" className='mt-2'>Projet suivant</Button>
            </Link>
        </>
    )
}