import "./style/abm.css"
import { Tittle } from "./tittle"
import { Description } from "./description"

export function AboutMe() {
  return (
    <div className="about-me">
      <Tittle />  
      <Description />
    </div>
  )
}
