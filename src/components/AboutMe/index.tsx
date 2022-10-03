import { AboutMeConsole } from "../AboutMeConsole";
import { AboutMeButton, AboutMeButtons, AboutMeContainer, AboutMeContent, AboutMeText } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect'

export function AboutMe() {
  return (
    <AboutMeContainer>
      <AboutMeContent>
        <div>
          <h1>
            Olá! <br />
            Eu sou o Matheus <br />
            <Typewriter
              options={{
                strings: [
                  'Front-end developer.',
                  'Amo café.tsx',
                  'Mas prefiro codar />',
                ],
                autoStart: true,
                delay: 60,
                loop: true,
              }}
            />
          </h1>

          <AboutMeText>
            Apaixonado em tecnologias e linguagens front-end. <br />
            Atualmente dedico meu tempo trabalhando com React e TypeScript. <br />
            Aqui você conhecerá um pouco do meu trabalho.
          </AboutMeText>

          <AboutMeButtons
            initial={{
              x: -500,
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
            <AboutMeButton
              href="https://www.linkedin.com/in/matheuspa01/"
              target="_blank"
            >
              LinkedIn
              <FontAwesomeIcon icon={faLinkedin} />
            </AboutMeButton>

            <AboutMeButton
              href="https://docs.google.com/document/d/1Vg8MU47npylxrYsX2pAwINgQ1r8aBNP9sdz1cZub05Q/edit"
              target="_blank"
            >
              CV
              <FontAwesomeIcon icon={faFileArrowDown} />
            </AboutMeButton>
          </AboutMeButtons>
        </div>

        <AboutMeConsole />
      </AboutMeContent>
    </AboutMeContainer>
  )
}