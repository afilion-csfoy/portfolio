import React from "react";

export function Horloge({ heures, minutes }) {
    let heuresAffichees = heures;
    let AMPM = 'AM';
    let resultat = <h1>Entrées invalides</h1>;

    if ((heures >= 0 && heures <= 23) && (minutes >= 0 & minutes <= 59 )) {  
        if (heures > 12) {
            heuresAffichees -= 12;
        }
        else if (heures === 0) {
            heuresAffichees = 12;
        }
    
        if (heures >= 12) {
            AMPM = 'PM';
        }

        resultat = <h1>{heuresAffichees}:{minutes} {AMPM}</h1>;
    }

    return resultat;
}