import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
    }

    scroll-behavior: smooth;
  }

  body {
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
  }

  body, input, textarea, button {
    font: 400 1rem Inter, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme["gray-800"]};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["green-500"]};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme["green-700"]};
  }
`