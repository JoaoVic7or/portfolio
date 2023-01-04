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
            <CardsConhecimento nome="Javascript" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" porcentagem="70"/>
            <CardsConhecimento nome="React" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" porcentagem="50"/>
            <CardsConhecimento nome="HTML" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" porcentagem="90"/>
            <CardsConhecimento nome="CSS" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" porcentagem="90"/>
            <CardsConhecimento nome="Python" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" porcentagem="50"/>
            <CardsConhecimento nome="Git" imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" porcentagem="50"/>
          </div>
      </div>
    </>
  )
}
