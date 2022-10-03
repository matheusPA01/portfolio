import { HeaderContainer, HeaderContent, HeaderLogo, HeaderNav, HeaderNavLink } from "./styles";
import { motion } from 'framer-motion'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo
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
            duration: 1,
          }}
        >
          <img src={logoImg} />
          <span>Matheus Prando</span>
        </HeaderLogo>

        <HeaderNav>
          <motion.div
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
              duration: 1,
            }}
          >
            <HeaderNavLink href="#home">
              {`{ Home }`}
            </HeaderNavLink>

            <HeaderNavLink href="#projects">
              {`{ Projetos }`}
            </HeaderNavLink>

            <HeaderNavLink href="#contact">
              {`{ Contato }`}
            </HeaderNavLink>
          </motion.div>
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer >
  )
}