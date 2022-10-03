interface MyProjectsProps {
  name: string;
  techs: string;
  image: string;
  url: string;
}

import imgNlw from './nlw.png'
import imgPortfolio from './Portfolio.png'
import imgGitblog from './gitblog.png'
import imgCoffee from './coffee.png'
import imgTodo from './todo.png'

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