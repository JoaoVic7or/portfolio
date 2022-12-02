import React from 'react'
import styles from './CardsProjetos.module.css'

export default function CardsProjetos(props) {
    return (
        <div className={styles.box_projetos}>
            <div className={styles.imagem_card}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className={styles.card}>
                <h3>{props.nome}</h3>
                <p>{props.descricao}</p>
                <div className={styles.card__button}>
                    <a href={props.url}>Visitar</a>
                    <a href={props.repo}>Repositório</a>
                </div>
            </div>
        </div>
    )
}
