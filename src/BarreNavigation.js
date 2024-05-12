import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

export const BarreNavigation = () => {
    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <NavDropdown title="Projets" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/projets/podometre">Podomètre</NavDropdown.Item>
                            <NavDropdown.Item href="/projets/podometre-negatif">Podomètre négatif</NavDropdown.Item>
                            <NavDropdown.Item href="/projets/ampoule">Ampoule</NavDropdown.Item>
                            <NavDropdown.Item href="/projets/formulaire ">Formulaire </NavDropdown.Item>
                            <NavDropdown.Item href="/projets/horloge ">Horloge </NavDropdown.Item>
                            <NavDropdown.Item href="/projets/statutclasse ">Classe</NavDropdown.Item>
                            <NavDropdown.Item href="/projets/jeudedes ">Jeu de dés</NavDropdown.Item>
                            <NavDropdown.Item href="/projets/dnd">Donjons et dragons</NavDropdown.Item>
                            <NavDropdown.Item href="/projets/recette/123456">Recette</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/a-propos">À propos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>        
    )
}