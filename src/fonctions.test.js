import { nombreDeLettres } from './fonctions.js';

test("Nombre de lettres dans une string", () => {
    expect(nombreDeLettres("bananes")).toBe(7);
    expect(nombreDeLettres("")).toBe(0);
    expect(nombreDeLettres(123)).toBe(0);
});
