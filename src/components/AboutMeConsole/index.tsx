import {
  AboutMeConsoleContainer, AboutMeConsoleBar, AboutMeConsoleContent,
  AboutMeConsoleFooter, AboutMeConsoleHeader, AboutMeConsoleSpan
} from "./styles";

import redBall from '../../assets/consoleRed.svg'
import yellowBall from '../../assets/consoleYellow.svg'
import greenBall from '../../assets/consoleGreen.svg'
import tsLogo from '../../assets/typescript.svg'
import scLogo from '../../assets/styled-components.svg'
import htmlLogo from '../../assets/html.svg'
import cssLogo from '../../assets/css.svg'
import jsLogo from '../../assets/javascript.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons'

export function AboutMeConsole() {
  return (
    <AboutMeConsoleContainer
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <AboutMeConsoleHeader>
        <div>
          <img src={redBall} />
          <img src={yellowBall} />
          <img src={greenBall} />
        </div>

        <AboutMeConsoleBar>
          <a href="https://github.com/matheuspa01" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            {`https://github.com/matheuspa01`}
          </a>
        </AboutMeConsoleBar>
      </AboutMeConsoleHeader>

      <AboutMeConsoleContent>
        <div>
          <AboutMeConsoleSpan variant="green">{`interface `}</AboutMeConsoleSpan>
          <AboutMeConsoleSpan>{`Techs {`}</AboutMeConsoleSpan>
        </div>
        <p><FontAwesomeIcon icon={faReact} /> React;</p>
        <p><img src={tsLogo} /> TypeScript;</p>
        <p><img src={scLogo} /> Styled Components;</p>
        <p><img src={htmlLogo} /> HTML;</p>
        <p><img src={cssLogo} /> CSS;</p>
        <p><img src={jsLogo} /> JavaScript;</p>
        <AboutMeConsoleSpan>{`}`}</AboutMeConsoleSpan>
      </AboutMeConsoleContent>

      <AboutMeConsoleFooter>
        <p>
          Esse portfólio foi feito utilizando
          <FontAwesomeIcon icon={faReact} />
        </p>
      </AboutMeConsoleFooter>
    </AboutMeConsoleContainer>
  )
}