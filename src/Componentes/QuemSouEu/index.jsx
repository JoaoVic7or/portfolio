import React from 'react'
import './SobreInicial.css'
import avatar from './avataaars.svg'

export default function SobreInicial(props) {
  return (
    <div className='SobreInicial'>
        <div className='SobreInicial__imagem'>
          <img src={avatar} alt='Avatar perfil'/>
        </div>
        <div className='SobreInicial__conteudo'>
            <h2>Olá, meu nome é<br/> João Victor Chacon</h2>
            <p>Sou desenvolvedor front-end, atualmente estou cursando Análise e Desenvolvimento de Sistemas. Tenho conhecimento em HTML, CSS, Javascript, React e Python. No momento estou buscando uma oportunidade para colocar meus conhecimentos em prática.</p>
        </div>
    </div>
  )
}
