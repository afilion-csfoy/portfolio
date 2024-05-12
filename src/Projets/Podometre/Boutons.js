import React from "react";

import Button from 'react-bootstrap/Button';

export function Boutons({ incrementer, decrementer, remiseAZero }) {
    return (
        <>
            <Button 
                variant={'primary'} 
                onClick={incrementer}
                className={"me-2"}
            >
                Incrémenter
            </Button>

            <Button 
                variant={'success'} 
                onClick={decrementer}
                className={"me-2"}
            >
                Décrémenter
            </Button>

            <Button variant={'warning'} onClick={remiseAZero}>
                Remise à zéro
            </Button>
        </>
    )
}