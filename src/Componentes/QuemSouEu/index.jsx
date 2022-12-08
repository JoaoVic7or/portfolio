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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod enim libero, at mattis odio tincidunt at. Proin ex metus, laoreet quis risus et, scelerisque mattis est. Aliquam erat volutpat. Morbi consectetur porta tellus ut malesuada. Vestibulum pretium arcu nisl. Phasellus malesuada posuere ultricies. Vivamus feugiat euismod velit non auctor. Nulla a semper tortor.</p>
        </div>
    </div>
  )
}
