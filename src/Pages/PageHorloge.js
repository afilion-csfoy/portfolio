import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { Horloge } from '../Projets/Horloge/Horloge.js';

export const PageHorloge = () => {
    const present = new Date();

    return (
        <>
            <h1>Horloge</h1>
            <Horloge heures={present.getHours()} minutes={present.getMinutes()} />
            <Link to='/projets/statutclasse'>
                <Button variant="primary" className='mt-2'>Projet suivant</Button>
            </Link>
        </>
    )
}