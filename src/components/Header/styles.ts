import styled from "styled-components";
import { motion } from 'framer-motion'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-800"]};
  padding: 1.5rem 2.5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`

export const HeaderContent = styled.div`
  max-width: 1380px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderLogo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  font: 400 1.25rem 'JetBrains Mono', sans-serif;

  @media screen and (min-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;

    font-size: 1rem;
  }

  @media screen and (min-width: 1440px) {
   font-size: 1.25rem;
  }
`

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 320px) {
    width: 100%;

    div {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }

  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    width: auto;
  }
`

export const HeaderNavLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme["gray-300"]};
  font: 400 0.75rem 'JetBrains Mono', sans-serif;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme["gray-400"]};
  }

  &:visited {
    color: ${(props) => props.theme["gray-300"]};
  }

  @media screen and (min-width: 375px) {
    font-size: 0.875rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 320px) {
    &+a {
      margin-left: 0.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    &+a {
      margin-left: 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    &+a {
      margin-left: 2rem;
    }
  }
`