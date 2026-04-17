import type { ReactNode } from "react"

type CardProps = {
  children : ReactNode
}

export default function Card({children}: CardProps) {
  return (
    <div className="card-container">
      <div className='card'>
        <div className="card-inner">
          {children}
        </div>
      </div>
    </div>
  )
}