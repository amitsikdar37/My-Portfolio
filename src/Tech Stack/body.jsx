import './style/body.css'
import React from './assets/icons/React.svg'
import JavaScript from './assets/icons/JavaScript.svg'
import Html from './assets/icons/Html.svg'
import Css from './assets/icons/Css.svg'
import Express from './assets/icons/Express.svg'
import MongoDB from './assets/icons/MongoDB.svg'
import Python from './assets/icons/Python.svg'
import Solidity from './assets/icons/Solidity.svg'
import Figma from './assets/icons/Figma.svg'
import N8n from './assets/icons/n8n.svg'
import Git from './assets/icons/Git.svg'
import Github from './assets/icons/Github.svg'
import VSCode from './assets/icons/VS Code.svg'
import Vercel from './assets/icons/Vercel.svg'
import Jupyter from './assets/icons/Jupyter.svg'

import { TsCard } from './ts-cards'

export function Body() {
  return (
    <div className='body-container'>
      <TsCard
        logo={React}
        techName={'React'}
        mastery={'Intermediate'}
      />

      <TsCard
        logo={JavaScript}
        techName={'JavaScript'}
        mastery={'Intermediate'}
      />

      <TsCard
        logo={Html}
        techName={'Html'}
        mastery={'Advance'}
      />
      
      <TsCard
        logo={Css}
        techName={'CSS'}
        mastery={'Advance'}
      />

      <TsCard
        logo={Express}
        techName={'Express'}
        mastery={'Intermediate'}
      />

      <TsCard
        logo={MongoDB}
        techName={'MongoDB'}
        mastery={'Beginner'}
      />

      <TsCard
        logo={Python}
        techName={'Python'}
        mastery={'Advance'}
      />

      <TsCard
        logo={Solidity}
        techName={'Solidity'}
        mastery={'Beginner'}
      />

      <TsCard
        logo={Figma}
        techName={'Figma'}
        mastery={'Beginner'}
      />

      <TsCard
        logo={N8n}
        techName={'N8n'}
        mastery={'Intermediate'}
      />

      <TsCard
        logo={Git}
        techName={'Git'}
        mastery={'Beginner'}
      />

      <TsCard
        logo={Github}
        techName={'Github'}
        mastery={'Beginner'}
      />

      <TsCard
        logo={VSCode}
        techName={'VS Code'}
        mastery={'Intermediate'}
      />

      <TsCard
        logo={Vercel}
        techName={'Vercel'}
        mastery={'Beginner'}
      />

      <TsCard
        logo={Jupyter}
        techName={'Jupyter'}
        mastery={'Beginner'}
      />

    </div>
  )
}