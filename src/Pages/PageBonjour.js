import React from 'react';
import { useParams } from 'react-router';

const PageBonjour = () => {
    const { prenom } = useParams();

    return <h1>Bonjour {prenom}!</h1>;
}

export default PageBonjour;