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

      {project.links ? 
        <div className="card-links">
          {project.links.live ? <a href={project.links.live} target="_blank" rel="noopener noreferrer"><p className="xs accent">Live demo ↗</p></a> : null}
          {project.links.github ? <a href={project.links.github} target="_blank" rel="noopener noreferrer"><p className="xs accent">Github repo ↗</p></a> : null}
        </div>
       : null}

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