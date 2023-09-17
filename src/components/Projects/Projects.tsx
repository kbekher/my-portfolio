import { projects } from './projectsList';
import { Project } from './Project';
// import { LandingSlider } from '../LandingSlider';

import './Projects.scss';

export const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <div className="container">
        <h2 className="Projects__title">Selected Works & Projects</h2>

        <div className="Projects__projects-section">
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>


        <div className="Projects__landings-section">
        {/* <LandingSlider /> */}
        </div>
      </div>
    </div>
  );
};