import React from 'react'
import { useEffect } from 'react';
import styles from './Projetos.module.css'
import CardsProjetos from '../../Componentes/CardsProjetos'
import consultaCep from './img/consulta_cep.png'

export default function Projetos(props) {
  useEffect(() => { document.title = props.title })

  const projetos = [
    <CardsProjetos
      nome="Consulta CEP"
      descricao="Site que consome uma API e te responde o endereço do CEP informado, junto com um botão que redireciona para o google maps."
      imagem={consultaCep} url="https://joaovic7or.github.io/Consultar-cep/" repo="https://github.com/JoaoVic7or/Consultar-cep"/>,
  ];


  return (
    <>
      <h2 className={styles.projetos_h2}>Projetos</h2>
      <section className={styles.container}>
        <div className={styles.container__projetos}>
          {projetos}
        </div>
      </section>
    </>
  )
}
