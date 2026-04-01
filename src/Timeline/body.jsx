import './style/body.css'
import { Card } from './card.jsx'

export function Body () {
  return (
    <div className='tl-body-container'>
      <div className='tl-body-left'>
        <Card 
          title1='Building'
          title2='AI Agent'
          description1='Improving and Making'
          description2='Contents'
          month='NOW'
          year= {null}
        />
        <Card 
          title1='UI'
          title2='Designer'
          description1='Learned UI'
          description2='Designing'
          month='March'
          year='2026'
        />
        <Card 
          title1='Backend'
          title2='Developer'
          description1='Learned Backend'
          description2='Development'
          month='April'
          year='2025'
        />
        <Card 
          title1='Python'
          title2='Developer'
          description1='Entered The Coding'
          description2='World'
          month='July'
          year='2024'
        />
      </div>
      <div className='tl-body-partition'>
        <div className='partition-line' />
        <div className='circle-container'>
          <svg xmlns="http://www.w3.org/2000/svg" width="103" height="103" viewBox="0 0 103 103" fill="none">
            <circle cx="51.5" cy="51.5" r="51.5" fill="#EE3030"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="103" height="103" viewBox="0 0 103 103" fill="none">
            <circle cx="51.5" cy="51.5" r="51.5" fill="#4FE454"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="103" height="103" viewBox="0 0 103 103" fill="none">
            <circle cx="51.5" cy="51.5" r="51.5" fill="#4FE454"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="103" height="103" viewBox="0 0 103 103" fill="none">
            <circle cx="51.5" cy="51.5" r="51.5" fill="#4FE454"/>
          </svg>
        </div>
      </div>
      <div className='tl-body-right'>
        <div className='summary'>
          <p>
            Architecting autonomous systems and documenting the build process for my YouTube community. Specializing in RAG-based agents and LLM integration to bridge the gap between static code and active intelligence.
          </p>
          <p>
            Mastering the art of high-fidelity, dark-mode aesthetics and user-centric flows in Figma. Applying modern design principles to ensure technical products are not just powerful, but visually compelling and intuitive.
          </p>
          <p>
            Deep-diving into the MERN stack to build robust server-side architectures and scalable APIs. Focused on database optimization and secure backends for decentralized applications and complex web ecosystems.
          </p>
          <p>
            Initiated my coding journey with Python, mastering the fundamentals of logic through automation and data analysis. Built a strong foundation in scripting and my first steps into the world of AI.
          </p>
        </div>
      </div>
    </div>
  )
}