import React from "react";

import { TitreSecondaire } from './TitreSecondaire.js';
import { Ingredient } from './Ingredient.js';

export function Ingredients({ ingredients }) {
    return (
      <>
        <TitreSecondaire titre="Ingrédients" />
        <ul>
          {ingredients.map(ingredient =>
            <Ingredient nom={ingredient} key={ingredient} />
          )}
        </ul>
      </>
    );
}