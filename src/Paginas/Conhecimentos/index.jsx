import React from 'react';
import CardsConhecimento from '../../Componentes/CardsConhecimento';
import styles from './Conhecimentos.module.css';

export default function Conhecimentos() {
  return (
    <div className={styles.container}>
        <h2>Conhecimentos</h2>
        <div className={styles.container__conhecimentos}>
          <CardsConhecimento nome="Javascript" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
          <CardsConhecimento nome="React" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"/>
          <CardsConhecimento nome="HTML" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
          <CardsConhecimento nome="CSS" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"/>
          <CardsConhecimento nome="Python" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        </div>
    </div>
  )
}
