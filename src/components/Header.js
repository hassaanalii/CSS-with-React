import React from 'react'
import HeaderCss from './Header.module.css'

export default function Header() {
  return (
    <header className='card'>
        <p>Header</p>
        <button className={HeaderCss.btn}>Main Button</button>
    </header>
  )
}
