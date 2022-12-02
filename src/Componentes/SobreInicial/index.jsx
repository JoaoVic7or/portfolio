import React from 'react'
import './SobreInicial.css'
import avatar from './avataaars.svg'

export default function SobreInicial() {
  return (
    <div className='SobreInicial'>
        <div className='SobreInicial__imagem'>
          <img src={avatar} alt='Avatar perfil'/>
        </div>
        <div className='SobreInicial__conteudo'>
            <h2>Olá, meu nome é<br/> João Victor Chacon</h2>
            <p>Estou cursando atualmente o 4° semestre de Análise e Desenvolvimento de Sistemas. Tive um amor a primeira vista pela área de front-end assim que comecei o curso, e tenho como meta trabalhar nessa área.</p>
        </div>
    </div>
  )
}
