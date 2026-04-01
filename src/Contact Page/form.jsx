import './style/form.css'
import DropdownArrow from './assets/icons/DropdownArrow.svg'
import MessageIcon from './assets/icons/message.svg'

export function Form () {
  return (
    <div className='form-container'>
      <div className='name-email-container'>
        <div className='name-container'>
          <p className='label'>Name</p>
          <input type='text' placeholder='Your Name' className='name-email-cnt-input' />
        </div>
        <div className='email-container'>
          <p className='label'>Email</p>
          <input type='text' placeholder='Your Email' className='name-email-cnt-input' />
        </div>
      </div>
      <div className='budget-container'>
        <p className='label'> Budget </p>
        <div className='input-wrapper'>
          <input type='text' placeholder='Select...' className='budget-input' />
          <img src={DropdownArrow} alt='Dropdown Arrow' className='dropdown-arrow' />
        </div>
      </div>
      <div className='message-container'>
        <p className='label'> Message</p>
        <div className='input-wrapper'>
          <textarea placeholder='Message' className='mssg-input' />
          <img src={MessageIcon} alt='Message Icon' className='message-icon' />
        </div>
      </div>
      <button className='submit-button'>Submit</button>
    </div>
  )
}