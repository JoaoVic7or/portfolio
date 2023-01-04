import React from 'react';
import {useEffect} from 'react';
import CardsConhecimento from '../../Componentes/CardsConhecimento';
import styles from './Conhecimentos.module.css';

export default function Conhecimentos(props) {
  useEffect(() => {document.title = props.title})
  return (
    <>
      <h2 className={styles.conhecimentos_h2}>Conhecimentos</h2>
      <div className={styles.container}>
          <div className={styles.container__conhecimentos}>
            <CardsConhecimento nome="Javascript" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
            <CardsConhecimento nome="React" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"/>
            <CardsConhecimento nome="HTML" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
            <CardsConhecimento nome="CSS" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"/>
            <CardsConhecimento nome="Python" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
            <CardsConhecimento nome="Git" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
            <CardsConhecimento nome="PHP" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"/>
          </div>
      </div>
    </>
  )
}
