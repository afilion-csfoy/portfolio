import React from 'react';

export function TotalMain({ main }) {
    const totalMain = main.reduce(
        (total, valeur) => {return total + valeur},
        0
    )

    return (
        <h3>Total de la main: {totalMain}</h3>
    )
}