import React from 'react'
import {useEffect} from 'react';
import QuemSouEu from '../../Componentes/QuemSouEu'
import './Pagina.css'

export default function Pagina(props) {
  useEffect(() => {document.title = props.title})
  return (
    <>
        <QuemSouEu />
    </>
  )
}
