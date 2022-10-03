import { ContactContainer, ContactContent, ContactGroup, ContactMe } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'

export function Contact() {

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <div>
          <h2>Contato</h2>
          <p>Gostaria de entrar em contato?</p>
        </div>

        <ContactMe>
          <ContactGroup>
            <span>
              <a
                href="https://api.whatsapp.com/send/?phone=5544999969093&text=Olá+Matheus%2C+observei+seu+portifólio+e+gostaria+entrar+em+contato+contigo%21&type=phone_number&app_absent=0"
                target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
              </a>
            </span>
            <span>
              <a href="mailto:theuspa98@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </a>
            </span>
          </ContactGroup>

          <ContactGroup>
            <span>
              <a href="https://www.linkedin.com/in/matheuspa01/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </span>
            <span>
              <a href="https://github.com/matheusPA01" target="_blank">
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </span>
          </ContactGroup>
        </ContactMe>
      </ContactContent>
    </ContactContainer>
  )
}