import './style/cp.css'
import { Heading } from './cp-heading'
import { Form } from './form'

export function ContactPage () {
  return (
    <div className='contact-page'>
      <div className='contact-page-container'>
        <Heading />
        <Form />
      </div>
    </div>
  )
}