import React from 'react';

export function StatsDes({ main }) {
    const nombreDes = main.reduce(
        (nombreValeurs, valeur) => {
            nombreValeurs[valeur - 1]++
            return nombreValeurs
        },
        [0, 0, 0, 0, 0, 0]
    )

    return (
        <>
            <h3>Stats</h3>
            <ul>
                {nombreDes.map((valeur, index) => (
                    <li>Nombre de {index + 1}: {valeur}</li>
                ))}
            </ul>
        </> 
    )
}