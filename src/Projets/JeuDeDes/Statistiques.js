import React from 'react';

import { StatsDes } from './StatsDes.js';
import { TotalMain } from './TotalMain.js';

export function Statistiques({ main }) {
  return (
    <>
      <TotalMain main={main} />
      <StatsDes main={main} />
    </>
  );
}