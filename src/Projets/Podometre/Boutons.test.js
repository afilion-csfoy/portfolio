import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Boutons } from './Boutons.js';

test('La fonction handler est appelée sur clic Incrémenter', () => {
    // Arrange
    const fonctionTest = jest.fn();
    render(<Boutons incrementer={fonctionTest} />);

    // Act
    fireEvent.click(screen.getByText('Incrémenter'));

    // Assert
    expect(fonctionTest).toHaveBeenCalledTimes(1);
})

test('Affiche les bons textes dans les boutons', () => {
    // Arrange
    render(<Boutons />);

    // Assert
    expect(screen.getByText('Incrémenter')).toBeInTheDocument();
    expect(screen.getByText('Décrémenter')).toBeInTheDocument();
    expect(screen.getByText('Remise à zéro')).toBeInTheDocument();
});
