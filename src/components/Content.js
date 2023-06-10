import React from 'react'
import ContentCss from './Content.module.css'

export default function Content() {
  return (
    <div className='card'>
        <p>Content</p>
        <button className={ContentCss.btn}>Content Button</button>
    </div>
  )
}
