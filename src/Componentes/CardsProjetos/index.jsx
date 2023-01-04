import React from 'react'
import styles from './CardsProjetos.module.css'

export default function CardsProjetos(props) {
    return (
        <div className={styles.box_projetos}>
            <div className={styles.imagem_card}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className={styles.card}>
                <div className={styles.card__conteudo}>
                    <h3>{props.nome}</h3>
                    <p>{props.descricao}</p>
                </div>
                <div className={styles.card__button}>
                    <a href={props.url} target="_blank" rel="noopener noreferrer">Visitar</a>
                    <a href={props.repo} target="_blank" rel="noopener noreferrer">Repositório</a>
                </div>
            </div>
        </div>
    )
}
