import type { Role } from "../data"
import Card from "./Card"

type RoleCardProps = {
  role: Role
}

export default function RoleCard({role}: RoleCardProps) {
  return (
    <Card>
      <div className='card-header'> 
        <h3>{`${role.title} - ${role.company}`}</h3>
        <div className="card-tags">
          {role.technologies.map(technology => 
            <div className="card-tag" key={technology}>
              <p>{technology}</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className="xs muted-2">
          {role.description}
        </p>

        
        {role.highlights?.length ?
          <ul className="xs muted-2">
            {role.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
          </ul> : null
        }
      </div>
      <div className="role-card-footer">
        <div className="role-card-footer-element">
            <p className='l accent'>{role.startDate}</p>
            <p className='xs muted-2'>Start date</p>
        </div>
        <div className="role-card-footer-element">
          <p className='l accent'>{role.endDate} </p>
          <p className='xs muted-2'>End date</p>
        </div>
      </div>
    </Card>
  )
}