import './style/card.css'

export function Card({title1, title2, description1, description2, month, year, onMouseEnter, onMouseLeave}) {
  return (
    <div className='card' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className='card-content'>
        <div className='tl-card-left'>
          <div className='tl-card-top'>
            <p>{title1}</p>
            <p>{title2}</p>
          </div>
          <div className='tl-card-down'>
            <p>{description1}</p>
            <p>{description2}</p>
          </div>
        </div>
        <div className='tl-card-right'>
          <div className='tl-card-line' />
          <div className='tl-card-date'>
            <div className='tl-card-date-content'>
              <p>{month}</p>
              <p>{year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}