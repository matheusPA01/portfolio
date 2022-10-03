import styled from "styled-components";
import { motion } from 'framer-motion'

export const AboutMeContainer = styled.main`
  padding: 2.5rem;
  margin: 2rem 0;
`

export const AboutMeContent = styled.section`
  max-width: 1380px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  h1 {
    font-weight: 400;
  }

  @media screen and (min-width: 320px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h1 {
      font-size: 1.4rem;
      height: 5rem;
    }
  }

  @media screen and (min-width: 375px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h1 {
      font-size: 1.75rem;
      height: 6rem;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    h1 {
      font-size: 2.5rem;
      height: 9.25rem;
    }
  }
`

export const AboutMeText = styled.p`
  line-height: 1.5;
  margin-top: 1.5rem;

  @media screen and (min-width: 320px) {
    font-size: 0.875rem;
  }

  @media screen and (min-width: 375px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.125rem;
  }
`

export const AboutMeButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media screen and (min-width: 320px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 375px) {
    flex-direction: row;
  }
`

export const AboutMeButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  background: transparent;
  border: 1px solid ${(props) => props.theme["green-300"]};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  font-size: 1.25rem;
  text-decoration: none;
  padding: 1rem;
  border-radius: 4px;

  transition: all 0.3s;

  svg {
    color: ${(props) => props.theme["blue-400"]};
  }

  &:hover {
    box-shadow: 0 0.5rem 0.5rem -0.4rem ${(props) => props.theme["green-300"]};
    transform: translateY(-0.25rem);
  }

  @media screen and (min-width: 320px) {
    width: 100%;

    font-size: 1rem;
  }

  @media screen and (min-width: 375px) {
    width: 50%;
  }

  @media screen and (min-width: 1440px) {
    width: 40%;
  }
`