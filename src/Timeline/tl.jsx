import "./style/tl.css"
import { Heading } from "./heading" 
import { Body } from "./body.jsx"

export function Timeline () {
  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <Heading/>
        <Body/>
      </div>
    </div>
  )
}