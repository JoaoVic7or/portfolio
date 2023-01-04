import React from 'react'
import styles from './PaginaError.module.css'

export default function PaginaError() {
  return (
    <div className={styles.container__paginaError}>
      <img src='https://www.github.com/JoaoVic7or.png' alt='imagem error'/>
      <span>Oops, essa página não existe...</span>
    </div>
  )
}
