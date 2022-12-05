import React from 'react'
import { useEffect } from 'react';
import styles from './Projetos.module.css'
import CardsProjetos from '../../Componentes/CardsProjetos'

export default function Projetos(props) {
  useEffect(() => { document.title = props.title })

  const projetos = [
    <CardsProjetos
      nome="TESTE"
      descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci ligula, maximus sed nunc eu, tempus porttitor neque. Morbi tincidunt leo eget augue pretium, a auctor magna ultricies."
      imagem="https://github.com/joaovic7or.png" />,
    <CardsProjetos
      nome="TESTE"
      descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci ligula, maximus sed nunc eu, tempus porttitor neque. m rhoncus."
      imagem="https://github.com/joaovic7or.png" />,
    <CardsProjetos
      nome="TESTE" 
      descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci ligula, maximus sed nunc eu, tempus porttitor neque. Morbi tincidunt leo eget augue pretium, a auctor magna ultricies."
      imagem="https://github.com/joaovic7or.png" />,
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
