import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectType } from '../../types/ProjectType';

import './Projects.scss';

type Props = {
  project: ProjectType;
}

export const Project: React.FC<Props> = ({ project }) => {
  const { id, title, description, url, imgPath } = project;
  const src = require(`./img/${imgPath}.webp`);

  return (
    <div className="Project">
      <div className="Project__text-section">
        <span className="Project__number">Project {id}</span>
        <h3 className="Project__title">{title}</h3>
        <p className="Project__description">{description}</p>
      </div>

      <Link
        to={url}
        target="_blank"
        className="Project__button"
      >
        Launch project
      </Link>

      <img
        src={src}
        alt={title}
        className="Project__img"
      />
    </div>
  );
};