import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ChangerStats } from './ChangerStats.js';
import { ChoisirRace } from './ChoisirRace.js';

function genererNombreAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min
}

export function JeuDnD() {
  const [stats, setStats] = useState(null);
  const [nbPoints, setNbPoints] = useState(5);

  function definirRace(race) {
    const statistiques = {
      force: genererNombreAleatoire(6, 12),
      endurance: genererNombreAleatoire(6, 12),
      charisme: genererNombreAleatoire(6, 12),
      dexterite: genererNombreAleatoire(6, 12),
      intelligence: genererNombreAleatoire(6, 12)
    }

    if (race === 'nain') {
      statistiques.force = statistiques.force + 3;
      statistiques.intelligence = statistiques.intelligence - 2;
      statistiques.endurance = statistiques.endurance + 2;
      statistiques.charisme = statistiques.charisme - 3;
    }
    else if ('elfe') {
      statistiques.force = statistiques.force -2;
      statistiques.intelligence = statistiques.intelligence + 3;
      statistiques.endurance = statistiques.endurance - 2;
      statistiques.dexterite = statistiques.dexterite + 3;
    }

    setStats(statistiques);
  }

  const incrementerStat = (stat) => {
    const nouvellesStats = Object.assign({}, stats);
    nouvellesStats[stat] = nouvellesStats[stat] + 1

    setStats(nouvellesStats);
    setNbPoints(nbPoints - 1);
  }

  var composantAffiche = <ChangerStats stats={stats} nbPoints={nbPoints} surClick={incrementerStat} />;

  if (stats === null) {
    composantAffiche = <ChoisirRace surDefinirRace={definirRace} />;
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            {composantAffiche}
          </Col>
        </Row>
      </Container>
    </>
  );
}