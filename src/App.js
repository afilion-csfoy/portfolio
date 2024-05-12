import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { PageAccueil } from './Pages/PageAccueil.js';
import { PageAPropos } from './Pages/PageAPropos.js';
import { PageProjets } from './Pages/PageProjets.js';
import { PagePodometre } from './Pages/PagePodometre.js';
import { PagePodometreNegatif } from './Pages/PagePodometreNegatif.js';
import { PageAmpoule } from './Pages/PageAmpoule.js';
import { PageFormulaire } from './Pages/PageFormulaire.js';
import { PageHorloge } from './Pages/PageHorloge.js';
import { PageStatutClasse } from './Pages/PageStatutClasse.js';
import { PageJeuDeDes } from './Pages/PageJeuDeDes.js';
import { PageDonjonsEtDragons } from './Pages/PageDonjonsEtDragons.js';
import { PageRecette } from './Pages/PageRecette.js';
import { Page404 } from './Pages/Page404.js';
import { BarreNavigation } from './BarreNavigation.js';

export function App() {
  return (
    <BrowserRouter>
      <Container>
        <BarreNavigation />
        <Routes>
          <Route path="/" element={<PageAccueil />} />
          <Route path="a-propos" element={<PageAPropos />} />
          <Route path="projets" element={<PageProjets />} />
          <Route path="projets/podometre" element={<PagePodometre />} />
          <Route path="projets/podometre-negatif" element={<PagePodometreNegatif />} />
          <Route path="projets/ampoule" element={<PageAmpoule />} />
          <Route path="projets/formulaire" element={<PageFormulaire />} />
          <Route path="projets/horloge" element={<PageHorloge />} />
          <Route path="projets/statutclasse" element={<PageStatutClasse />} />
          <Route path="projets/jeudedes" element={<PageJeuDeDes />} />
          <Route path="projets/dnd" element={<PageDonjonsEtDragons />} />
          <Route path="projets/recette/:identifiant" element={<PageRecette />} />
          <Route path="*" element={<Page404 />} /> 
        </Routes>
      </Container>
    </BrowserRouter>
  );
}