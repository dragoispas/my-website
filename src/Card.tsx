import type { Role } from "./data"

type CardProps = {
  role: Role
}

export default function Card({role}: CardProps) {
  return (
    <div className="card-container">
      <div className='card'>
        <div className="card-inner">
          <div className='card-header'> 
            <h3>{`${role.title} - ${role.company}`}</h3>
            <div className="tags">
              {role.technologies.map(technology => 
                <div className="tag">
                  <p>{technology}</p>
                </div>
              )}
            </div>
          </div>
          <div className="card-content">
            <p className="xs muted">
              {role.description}
            </p>

            
            {role.highlights && 
              <>
                {/* <p className="xs muted">Highlights:</p> */}
                <ul className="xs muted card-list">
                  {role.highlights.map(highlight => <li>{highlight}</li>)}
                </ul>
              </>
            }
          </div>
          <div className="card-footer">
            <p className='l accent'>{role.startDate}</p>
            <p className='l accent'>{role.endDate} </p>
            <p className='xs muted'>Start date</p>
            <p className='xs muted'>End date</p>
          </div>
        </div>
      </div>
    </div>
  )
}