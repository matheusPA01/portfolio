import styled from "styled-components";
import { motion } from 'framer-motion'

export const AboutMeConsoleContainer = styled(motion.div)`
  border-radius: 15px 15px 0 0;
  background-color: ${(props) => props.theme["console-bg"]};
  box-shadow: 0 0 2px ${(props) => props.theme["green-300"]};

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 320px) {
    width: 100%;
    height: 28rem;

    padding: 0.75rem;
  }

  @media screen and (min-width: 375px) {
    padding: 0.5rem 1rem;
  }

  @media screen and (min-width: 768px) {
    width: 75%;
    padding: 0.5rem 2rem;
  }

  @media screen and (min-width: 1440px) {
    width: 80%;
    height: 31.25rem;
  }
`

export const AboutMeConsoleHeader = styled.header`
  display: flex;

  div {
    display: flex;
    gap: 0.5rem;

    img {
      width: 0.5rem;
    }
  }

  @media screen and (min-width: 320px) {
    justify-content: center;
    gap: 0;

    div {
      img {
        display: none;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    gap: 2rem;

    div {
      img {
        display: flex;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 11.5rem;
  }
`

export const AboutMeConsoleBar = styled.div`
  width: 50%;
  background: ${(props) => props.theme["gray-850"]};
  padding: 0.2rem;
  border-radius: 12px;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    gap: 1rem;

    text-decoration: none;
    color: ${(props) => props.theme["gray-300"]};
    font-size: 0.875rem;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme["gray-400"]};
    }
  }

  @media screen and (min-width: 320px) {
    width: 100%;

    a {
      font-size: 0.75rem;
      gap: 0.25rem;
    }
  }

  @media screen and (min-width: 375px) {
    a {
      font-size: 0.875rem;
      gap: 0.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 80%;

    a {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 50%;

    a {
      font-size: 0.875rem;
    }
  }
`

export const AboutMeConsoleContent = styled.div`
  margin-top: 2rem;
  /* font-size: 1.25rem; */

  p {
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-left: 1rem;
    line-height: 1.4;

    &:nth-child(2) {
      margin-top: 1rem;
    }

    &:nth-child(7) {
      margin-bottom: 1rem;
    }

    svg {
      color: ${(props) => props.theme["blue-300"]};
    }
  }

  @media screen and (min-width: 320px) {
    p {
      font-size: 0.875rem;

      svg {
        font-size: 1.25rem;
      }

      &+p {
        margin-top: 0.5rem;
      }
    }
  }

  @media screen and (min-width: 375px) {
    p {
      font-size: 1.25rem;

      &+p {
        margin-top: 0;
      }
    }
  }
`

interface AboutMeConsoleTextProps {
  variant?: 'green';
}

export const AboutMeConsoleSpan = styled.span<AboutMeConsoleTextProps>`
  color: ${(props) => props.variant === 'green' ? props.theme["green-300"] : ''};
`

export const AboutMeConsoleFooter = styled.footer`
  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme["blue-300"]};
    }
  }

  @media screen and (min-width: 320px) {
    margin-top: 4rem;
    align-self: center;
    
    p {
      font-size: 0.75rem;
      
      svg {
        font-size: 1.25rem;
      }
    }
  }

  @media screen and (min-width: 375px) {
    margin-top: 6rem;

    p {
      font-size: 0.875rem;

      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    align-self: flex-end;
    margin-top: 5.5rem;

    p {
      font-size: 1rem;

      svg {
        font-size: 2rem;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 9rem;
  }
`