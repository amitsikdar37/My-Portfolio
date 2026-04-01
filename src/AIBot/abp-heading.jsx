import './style/abp-heading.css'

import Hi from './assets/icons/Hi.svg'
import code from './assets/icons/Code.svg'

export function Heading() {
  return (
    <div className='abp-heading'>
      <img src={code} alt='Hi'/>
      <div className='main-heading-container'>
        <div className='main-heading'>
          <h1>Hey, I'm Amit</h1>
          <img src={Hi} alt='Hi'/>
        </div>
        <h2>AI Engineer</h2>
      </div>

    </div>
  )
}