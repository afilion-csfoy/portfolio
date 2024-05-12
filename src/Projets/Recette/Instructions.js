import React from "react";

import { TitreSecondaire } from "./TitreSecondaire.js";
import { Instruction } from './Instruction.js';

export function Instructions({ instructions }) {
    return (
      <>
        <TitreSecondaire titre="Instructions" />
        <ol>
          {instructions.map(instruction =>
            <Instruction nom={instruction} key={instruction} />
          )}
        </ol>
      </>
    );
}