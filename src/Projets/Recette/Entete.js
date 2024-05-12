import React from "react";

import { TitrePrincipal } from './TitrePrincipal.js';
import { Description } from './Description.js';

export function Entete({ titre, description }) {
    return (
      <>
        <TitrePrincipal titre={titre} />
        <Description description={description} />
      </>
    );
}