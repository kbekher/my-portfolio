import React from 'react';

import './Skills.scss';

type Props = {
  name: string;
  path: string;
};

export const SkillBox: React.FC<Props> = ({ name, path }) => (
  <div className={`SkillBox SkillBox--${path}`}>
    <p className="SkillBox__skill-name">{name}</p>
  </div>
);