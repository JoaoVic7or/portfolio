import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css'

export default function MenuLink(props) {
    const location = useLocation();
    return (
        <Link  className={`${location.pathname === props.link ? styles.linkDestacado : ""}`} to={props.link}>{props.value}</Link>
  )
}