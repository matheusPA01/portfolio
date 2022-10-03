import { myProjects } from "../../assets/myProjects";
import { CardOverlay, ProjectsCard, ProjectsContainer, ProjectsContent, ProjectsList } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Projects() {
  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <h2>Projetos</h2>

        <ProjectsList>
          {
            myProjects.map(project => {
              return (
                <ProjectsCard
                  key={project.url}
                >
                  <h3>{project.name}</h3>

                  <img src={project.image} />

                  <p>
                    Utilizado: {project.techs}
                  </p>

                  <CardOverlay>
                    <div>
                      <a href={project.url}
                        target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        <p>Abrir no Github</p>
                      </a>
                    </div>
                  </CardOverlay>
                </ProjectsCard>
              )
            })
          }
        </ProjectsList>
      </ProjectsContent>
    </ProjectsContainer>
  )
}