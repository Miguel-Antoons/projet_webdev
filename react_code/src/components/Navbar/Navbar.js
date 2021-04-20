import React from 'react';
import * as BS from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import logoNavbar from "./navbar_logo.png";

function Navbar() {
    return (
        <BS.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <LinkContainer to='/'>
                <BS.Navbar.Brand>
                    <img
                        alt=""
                        src={logoNavbar}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Factevis
                </BS.Navbar.Brand>
            </LinkContainer>
            <BS.Navbar.Toggle aria-controls="responsive-BS.Navbar-BS.Nav"/>
            <BS.Navbar.Collapse id="responsive-BS.Navbar-BS.Nav">
                <BS.Nav className="mr-auto">
<<<<<<< HEAD
                    <BS.Nav.Link href="/facture">Factures</BS.Nav.Link>
                    <BS.Nav.Link href="/devis">Devis</BS.Nav.Link>
                    <BS.Nav.Link href="/etiquetage">Étiquetage</BS.Nav.Link>
                    <BS.Nav.Link href="/Client">Client</BS.Nav.Link>
                    <BS.Nav.Link href="/suivi">Suivi de matériel</BS.Nav.Link>
                    <BS.NavDropdown title="Modifier/Ajouter" id="collasible-BS.Nav-dropdown">
                        <BS.NavDropdown.Item href="/Ajout_Client">Client</BS.NavDropdown.Item>
                        <BS.NavDropdown.Item href="/facture">Article</BS.NavDropdown.Item>
                        <BS.NavDropdown.Item href="/ensemble">ensemble d'articles</BS.NavDropdown.Item>
=======
                    <LinkContainer to='/projets_factures'>
                        <BS.Nav.Link>Factures</BS.Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/projets_devis'>
                        <BS.Nav.Link>Devis</BS.Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/projets_etiquettes'>
                        <BS.Nav.Link>Étiquetage</BS.Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/suivi'>
                        <BS.Nav.Link>Suivi de matériel</BS.Nav.Link>
                    </LinkContainer>
                    <BS.NavDropdown title="Modifier/Ajouter" id="collasible-BS.Nav-dropdown">
                        <LinkContainer to='/rassemblement_clients'>
                            <BS.NavDropdown.Item>Client</BS.NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/projets_rgie'>
                            <BS.NavDropdown.Item>Rgie</BS.NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/rassemblement_articles'>
                            <BS.NavDropdown.Item>Articles</BS.NavDropdown.Item>
                        </LinkContainer>
>>>>>>> test
                        <BS.NavDropdown.Divider/>
                    </BS.NavDropdown>
                </BS.Nav>
                {/*
                    <BS.Nav>
                        <BS.Nav.Link href="#deets"></BS.Nav.Link>
                        <BS.Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </BS.Nav.Link>
                    </BS.Nav>
                */}
            </BS.Navbar.Collapse>
        </BS.Navbar>
    )
}


export default Navbar;