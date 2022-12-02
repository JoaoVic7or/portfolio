import React from 'react';
import styles from './Header.module.css';
import projetos from './img/folder.svg';
import sobre from './img/info.svg';
import conhecimentos from './img/conhecimentos.svg';
import contato from './img/mail.svg';
import MenuLink from '../MenuLink';

export default function Header() {
    return (
        <header>
            <h1>&lt;joaochacon /&gt;</h1>
            <nav className={styles.header__Menu}>
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
                        <a href='mailto: joaochacon1234@gmail.com'>Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}