import styled from "styled-components";

export const ContactContainer = styled.section`
  padding: 2.5rem;
  margin-bottom: 2rem;
`

export const ContactContent = styled.div`
  max-width: 1380px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 0.5rem;
  }
`

export const ContactMe = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
`

export const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    font-size: 1.25rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      background: transparent;
      border: 1px solid ${(props) => props.theme["green-300"]};
      color: ${(props) => props.theme.white};
      text-decoration: none;
      padding: 1rem;
      width: 12rem;
      border-radius: 4px;

      transition: all 0.3s;

      svg {
        color: ${(props) => props.theme["blue-400"]};
      }

      &:hover {
        box-shadow: 0 0.5rem 0.5rem -0.4rem ${(props) => props.theme["green-300"]};
        transform: translateY(-0.25rem);
      }
    }
  }

  @media screen and (min-width: 320px) {
    span {
      font-size: 1rem;
      a {
        width: 8rem;
      }
    }
  }

  @media screen and (min-width: 425px) {
    span {
      a {
        width: 10rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    span {
      a {
        width: 12rem;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    span {
      font-size: 1.25rem;
    }
  }
`