import React from 'react';
import Button from 'react-bootstrap/Button';

const libelles = {
  force: "Force",
  endurance: "Intelligence",
  charisme: "Charisme",
  dexterite: "Dextérité",
  intelligence: "Intelligence"
}

export function ChangerStats({ stats, nbPoints, surClick }) {
    return (
      <>
        <h1>Valider le profil</h1>
        <h3>Points à assigner: {nbPoints} point{nbPoints > 1 ? 's' : null}</h3>
  
        <ul>
          {
            Object.keys(stats).map(stat => (
              <li>{libelles[stat]}: {stats[stat]} / 18
                {(stats[stat] < 18 && nbPoints > 0 ) ? 
                  <Button 
                    variant="warning" 
                    size="sm" 
                    className="m-1"
                    onClick={() => surClick(stat)}
                  >incr</Button> :
                  null
                }
              </li>
            ))
          }
        </ul>
      </>
    );
  }