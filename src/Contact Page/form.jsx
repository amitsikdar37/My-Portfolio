import React, { useState } from 'react'
import './style/form.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

import DropdownArrow from './assets/icons/DropdownArrow.svg'
import MessageIcon from './assets/icons/message.svg'

gsap.registerPlugin(useGSAP)

export function Form () {

  const container = useRef(null)
  const statusRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  })

  const [status, setStatus] = useState({ type: null, message: '', key: Date.now() })

  const { contextSafe } = useGSAP({ scope: container })

  const mouseEnter = contextSafe(() => {
    gsap.to('.submit-button', {
      y: -10,
      scale: 1.1,
      duration: 0.5,
      ease:'power2.out'
    })
  })

  const mouseLeave = contextSafe(() => {
    gsap.to('.submit-button', {
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.inOut'
    })
  })

  const mouseDown = contextSafe(() => {
    gsap.to('.submit-button', {
      scale: 0.92,
      duration: 0.1,
      ease: "power2.out"
    })
  })

  const mouseUp = contextSafe(() => {
    gsap.to('.submit-button', {
      scale: 1.1,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    })
  })

  useGSAP(() => {
    if (status.type && statusRef.current) {
      gsap.fromTo(statusRef.current, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: 'power3.out',
          onComplete: () => {
            gsap.to(statusRef.current, {
              opacity: 0,
              y: -20,
              duration: 0.5,
              delay: 4,
              ease: 'power3.in',
              onComplete: () => {
                setStatus({ type: null, message: '', key: Date.now() })
              }
            })
          }
        }
      )
    }
  }, [status.key, status.type])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.', key: Date.now() })
        setFormData({ name: '', email: '', budget: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.', key: Date.now() })
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus({ type: 'error', message: 'An error occurred. Make sure your backend is running.', key: Date.now() })
    }
  }

  return (
    <form className='form-container' onSubmit={handleSubmit} ref={container}>
      <div className='name-email-container'>
        <div className='name-container'>
          <p className='label'>Name</p>
          <input 
            name='name'
            value={formData.name}
            onChange={handleChange}
            type='text' 
            placeholder='Your Name' 
            className='name-email-cnt-input' 
            required 
          />
        </div>
        <div className='email-container'>
          <p className='label'>Email</p>
          <input 
            name='email'
            value={formData.email}
            onChange={handleChange}
            type='email' 
            placeholder='Your Email' 
            className='name-email-cnt-input' 
            required 
          />
        </div>
      </div>
      <div className='budget-container'>
        <p className='label'> Budget </p>
        <div className='input-wrapper'>
          <input 
            name='budget'
            value={formData.budget}
            onChange={handleChange}
            type='text' 
            placeholder='Your Budget' 
            className='budget-input' 
            required
          />
        </div>
      </div>
      <div className='message-container'>
        <p className='label'> Message</p>
        <div className='input-wrapper'>
          <textarea 
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Message' 
            className='mssg-input' 
            required
          />
          <img src={MessageIcon} alt='Message Icon' className='message-icon' />
        </div>
      </div>
      
      {status.type && (
        <div 
          ref={statusRef} 
          className={`status-message ${status.type}`}
        >
          {status.message}
        </div>
      )}

      <button 
        type='submit' 
        className='submit-button'
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
      > 
        Submit
      </button>
    </form>
  )
}