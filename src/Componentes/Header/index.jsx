import React from 'react';
import styles from './Header.module.css';
import projetos from './img/folder.svg';
import sobre from './img/info.svg';
import conhecimentos from './img/conhecimentos.svg';
import contato from './img/mail.svg';
import MenuLink from '../MenuLink';
import MenuResponsivo from '../MenuResponsivo';

export default function Header() {
    return (
        <header>
            <h1>&lt;joaochacon /&gt;</h1> 
            <nav className={styles.header__Menu}>
                <MenuResponsivo />
                <ul>
                    <li>
                        <img src={sobre} alt='Sobre' />
                        <MenuLink link="/" value="Sobre"> Sobre </MenuLink>
                    </li>
                    <li>
                        <img src={projetos} alt='Projetos' />
                        <MenuLink link="/projetos" value="Projetos">Projetos</MenuLink>
                    </li>
                    <li>
                        <img src={conhecimentos} alt='Conhecimentos' />
                        <MenuLink link="/conhecimentos" value="Conhecimentos">Conhecimentos</MenuLink>
                    </li>
                    <li>
                        <img src={contato} alt='Contato'/>
                        <MenuLink link="/contato" value="Contato">Contato</MenuLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
