import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { JeuDnD } from '../Projets/DnD/JeuDnD.js';

export const PageDonjonsEtDragons = () => {
    return (
        <>
            <h1>Donjons et dragons</h1>
            <JeuDnD />
            <Link to='/projets/recette/123456'>
                <Button variant="primary" className='mt-2'>Projet suivant</Button>
            </Link>
        </>
    )
}