import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { JeuDeDes } from '../Projets/JeuDeDes/JeuDeDes.js';

export const PageJeuDeDes = () => {
    return (
        <>
            <h1>Jeu de dés</h1>
            <JeuDeDes />
            <Link to='/projets/dnd'>
                <Button variant="primary" className='mt-2'>Projet suivant</Button>
            </Link>
        </>
    )
}