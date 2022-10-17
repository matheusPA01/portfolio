interface MyProjectsProps {
  name: string;
  techs: string;
  image: string;
  url: string;
}

import imgNlw from '../assets/nlw.png'
import imgPortfolio from '../assets/portfolio.png'
import imgGitblog from '../assets/gitblog.png'
import imgCoffee from '../assets/coffee.png'
import imgTodo from '../assets/todo.png'

export const myProjects: MyProjectsProps[] = [
  {
    name: 'Portfólio Matheus Prando',
    techs: 'TypeScript, React, Styled Components',
    image: imgPortfolio,
    url: 'https://github.com/matheusPA01/portfolio',
  },

  {
    name: 'NLW Esports',
    techs: 'TypeScript, React, React Native, Tailwind, CSS, Node',
    image: imgNlw,
    url: 'https://github.com/matheusPA01/nlw-esports',
  },

  {
    name: 'Github Blog',
    techs: 'TypeScript, React, Styled Components',
    image: imgGitblog,
    url: 'https://github.com/matheusPA01/ignite2022-desafio-03',
  },

  {
    name: 'Coffee Delivery',
    techs: 'TypeScript, React, Styled Components',
    image: imgCoffee,
    url: 'https://github.com/matheusPA01/ignite2022-desafio-02',
  },

  {
    name: 'ToDo List',
    techs: 'TypeScript, React, CSS Modules',
    image: imgTodo,
    url: 'https://github.com/matheusPA01/ignite2022-desafio-01',
  },
]