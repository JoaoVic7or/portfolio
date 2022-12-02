import React from 'react';
import styles from './CardsConhecimento.module.css';

export default function CardsConhecimento(props) {
    return (
        <div className={styles.container}>
            <div className={styles.container__imagem}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className={styles.container__linguagem}>
                <h4>{props.nome}</h4>
            </div>
        </div>
    )
}
