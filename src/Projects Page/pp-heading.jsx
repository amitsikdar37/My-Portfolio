import './style/pp-heading.css'
import HomeLogo from './assets/icons/Home.svg'
import { Link } from 'react-router-dom'

export function PPHeading() {
  return (
    <div className="pp-heading">
      <div className='pp-heading-text'>
        <p> Portfolio </p>
        <div className='pp-heading-text-main'>
          <div className='pp-heading-text-main-line'></div>
          <h1> <span>My</span> Projects </h1>
          <div className='pp-heading-text-main-line'></div>
        </div>
        <p className='pp-description'>Collection Of All My Works</p>
      </div>
      <Link to="/" className="home-link">
        <button className='Home-Btn'>
          <img src={HomeLogo} alt="Home" className='Home-Logo' />
          Home
        </button>
      </Link>
    </div>
  )
}
