import './style/abp-heading.css'

import Hi from './assets/icons/Hi.svg'
import code from './assets/icons/Code.svg'

export function Heading({ chatActive }) {
  return (
    <div className={`abp-heading ${chatActive ? 'abp-heading--mini' : ''}`}>
      <img src={code} alt='Code' className='abp-heading-code-icon' />
      <div className='main-heading-container'>
        <div className='main-heading'>
          <h1>Hey, I'm Amit</h1>
          <img src={Hi} alt='Hi' />
        </div>
        <h2>AI Engineer</h2>
      </div>
    </div>
  )
}