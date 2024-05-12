import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TotalMain } from './TotalMain.js';

test('Affichage sans exceptions', () => {
    // Arrange
    const mainDes = [4, 3, 3, 1, 6];
    render(<TotalMain main={mainDes} />);
});

test('Affiche le bon total selon la main passée en props', () => {
    // Arrange
    const mainDes = [4, 3, 3, 1, 6];
    render(<TotalMain main={mainDes} />);

    // Assert
    expect(screen.getByText('Total de la main: 17')).toBeInTheDocument();
});
