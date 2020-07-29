import React from 'react';
import Logo from '../../assets/img/fanflix_logo.png';
import "./Menu.css";
// import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="FanFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo item de Fã
            </Button>

        </nav>
    );
}

export default Menu;