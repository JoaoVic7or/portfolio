import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className='footer_Container'>
          <div className='Footer__icons'>
              <a><i className="devicon-linkedin-plain colored"></i></a>
              <a><i className="devicon-github-original colored"></i></a>
          </div>
            <p>Copyright 2022 - joaochacon.dev</p>
      </div>
    </footer>
  )
}
