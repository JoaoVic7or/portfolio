import React from 'react'
import menuIcon from './menu.svg'
import styles from './MenuResponsivo.module.css'

export default function MenuResponsivo() {
  return (
    <img src={menuIcon} alt='menu' className={styles.menuIcon}/>
  )
}
