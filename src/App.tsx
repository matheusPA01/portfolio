import { ThemeProvider } from "styled-components";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />

      <GlobalStyle />
    </ThemeProvider>
  )
}