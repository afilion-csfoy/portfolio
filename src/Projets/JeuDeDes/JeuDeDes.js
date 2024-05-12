import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

import { MainDes } from './MainDes.js';
import { Statistiques } from './Statistiques.js';

export function JeuDeDes() {
    const [mainDes, setMainDes] = useState(brasserMainAleatoire());

    function genererNombreAleatoire(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min
    }

    function brasserMainAleatoire() {
        return [
            genererNombreAleatoire(1, 6),
            genererNombreAleatoire(1, 6),
            genererNombreAleatoire(1, 6),
            genererNombreAleatoire(1, 6),
            genererNombreAleatoire(1, 6)
        ]
    }

    function brasserDe(index) {
        const nouvelleValeur = genererNombreAleatoire(1, 6);
        const nouvelleMain = mainDes.slice();
        nouvelleMain[index] = nouvelleValeur;

        setMainDes(nouvelleMain);
    }

    return (
        <>
            <h1>
              Jeu de dés  
              <Button 
                variant="warning" 
                className="m-1"
                onClick={() => setMainDes(brasserMainAleatoire())}>
                Brasser la main
              </Button>
            </h1>
            <strong>Cliquez sur l'image pour 
              brasser un dé individuel</strong><br/>
            
            <MainDes
                main={mainDes}
                handleClick={brasserDe}
            />
            <Statistiques main={mainDes} />
        </>     
    );
}