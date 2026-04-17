import type { Project } from "../data";
import Card from "./Card";

type ProjectCardInterface = {
  project: Project
}

export default function ProjectCard({ project } : ProjectCardInterface) {
  return (
    <Card>
      <div className='card-header'> 
        <h3>{project.title}</h3>
        <div className="card-tags">
          {project.tags.map(tag => 
            <div className="card-tag" key={tag}>
              <p>{tag}</p>
            </div>
          )}
        </div>
      </div>

      <p className="xs muted-2">{project.description}</p>

      <div>
        {project.highlights.map(highlight => (
          <div key={highlight.highlight}>
            <p className="xs muted-2">
              {highlight.highlight}
            </p>
            <ul className="xs muted-2">
              {highlight.details.map(detail => <li key={detail}>{detail}</li>)}
            </ul> 
          </div>
        ))}
        
      </div>
    </Card>
  )
}