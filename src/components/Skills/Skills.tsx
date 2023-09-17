import { SkillBox } from "./SkillBox";
import { skillBoxes } from "./skillBoxes";

import './Skills.scss';

export const Skills = () => (
  <div className="Skills" id="skills">
    <div className="container">
      <h2 className="Skills__title">Skills</h2>

      <div className="Skills__container">
        {skillBoxes.map(skill => (
          <SkillBox
            key={skill.name}
            name={skill.name}
            path={skill.imgPath}
          />
        ))}
      </div>
    </div>
  </div>
);