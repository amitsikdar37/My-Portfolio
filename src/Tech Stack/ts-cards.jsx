import './style/ts-cards.css'

export function TsCard ({logo, techName, mastery}) {
  return (
    <div className='ts-card'>
      <div className='logo'>
        <img src={logo} className='logo-img'/>
      </div>
      <div className='ts-meta'>
        <div className='ts-meta-container'>
          <p className='tech-name'> {techName} </p>
          <p className={`mastery ${mastery.toLowerCase()}`}> {mastery} </p>
        </div>
      </div>
    </div>
  )
}