import React from 'react'
import './MenuResponsivo.css'
import { push as Menu } from 'react-burger-menu';
import MenuLink from '../MenuLink';
import projetos from '../Header/img/folder.svg';
import sobre from '../Header/img/info.svg';
import conhecimentos from '../Header/img/conhecimentos.svg';
import contato from '../Header/img/mail.svg';


export default function MenuResponsivo() {

  return (
    <Menu right noTransition>
      <ul className='menuresponsivo'>
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
          <img src={contato} alt='Contato' />
          <a href='mailto: joaochacon1234@gmail.com'>Contato</a>
        </li>
      </ul>
      <p>Ainda não está 100% funcional... em construção</p>
    </Menu>
  )
}
