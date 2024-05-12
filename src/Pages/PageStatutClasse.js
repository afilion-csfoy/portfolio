import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { StatutClasse } from '../Projets/Classe/StatutClasse.js';

const etudiants = [
    { 'note': 8.5, 'nom': 'Adam Bernard', 'matricule': '486123' },
    { 'note': 10.0, 'nom': 'Charles Demers', 'matricule': '375911' },
    { 'note': 6.0, 'nom': 'Eric Fillion', 'matricule': '025893' },
    { 'note': 5.5, 'nom': 'Guy Huard', 'matricule': '507962' },
    { 'note': 6.0, 'nom': 'Ian Jacob', 'matricule': '935700' },
    { 'note': 7.0, 'nom': 'Kim Labrecque', 'matricule': '135796' },
    { 'note': 10.0, 'nom': 'Michel Nolet', 'matricule': '579461' },
    { 'note': 2.5, 'nom': 'Olivier Paquet', 'matricule': '356919' },
    { 'note': 0.0, 'nom': 'Quentin Roberge', 'matricule': '791222' },
    { 'note': 9.5, 'nom': 'Sylvie Tanguay', 'matricule': '777855' },
  ];

export const PageStatutClasse = () => {
    return (
        <>
            <h1>Classe</h1>
            <StatutClasse etudiants={etudiants}/>
            <Link to='/projets/jeudedes'>
                <Button variant="primary" className='mt-2'>Projet suivant</Button>
            </Link>
        </>
    )
}