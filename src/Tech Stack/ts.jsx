import './style/ts.css'
import { Heading } from './heading'
import { Body } from './body'

export function TechStack() {
  return (
    <div className='tech-stack-page'>
      <div className='tech-stack-container'>
        <Heading/>
        <Body/>
      </div>
    </div>
  )
}