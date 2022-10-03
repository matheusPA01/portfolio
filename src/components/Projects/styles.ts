import styled from "styled-components";

export const ProjectsContainer = styled.section`
  background: ${(props) => props.theme["dark-100"]};
  padding: 2.5rem;
`

export const ProjectsContent = styled.div`
  max-width: 1380px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
    text-align: center;
  }
`

export const ProjectsList = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  }
`

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  position: relative;

  background: ${(props) => props.theme["console-bg"]};
  box-shadow: 0 0 2px ${(props) => props.theme["green-300"]};
  border-radius: 6px;
  padding: 2rem;

  text-align: center;
  text-decoration: none;

  img {
    width: 100%;
  }

  p {
    /* height: 2.5rem; */
  }

  @media screen and (min-width: 320px) {
    padding: 1.5rem 1rem;

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 2rem;

    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 1rem;
      /* height: 2.5rem; */
    }
  }

  @media screen and (min-width: 1024px) {
    h3 {
      height: 2.5rem;
      /* font-size: 1.15rem; */
    }

    p {
      height: 2.5rem;
    }
  }
`

export const CardOverlay = styled.div`
  position: absolute;
  background: rgba(0,0,0,0.7);
  height: 100%;
  width: 100%;
  border-radius: 6px;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;

  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;

  div {
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    a {
      color: ${(props) => props.theme["gray-300"]};
      font-weight: 700;
      text-decoration: none;
      margin-top: 0.25rem;

      svg {
        font-size: 3rem;
      }

      p {
        margin-top: 0.25rem;
      }
    }
  }

  &:hover {
    opacity: 1;
  }
`