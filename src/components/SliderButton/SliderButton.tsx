import cn from 'classnames';
import { Direction } from '../../types/Direction';

import './SliderButton.scss';

type Props = {
  direction: Direction;
  handleClick: (direction: Direction) => void
  disabled?: boolean;
};

export const SliderButton: React.FC<Props> = ({
  direction,
  handleClick,
  disabled = false,
}) => (
  <button
    type="button"
    className="SliderButton"
    onClick={() => {
      handleClick(direction);
    }}
    disabled={disabled}
  >
    <i
      className={cn("fa-sharp fa-solid fa-border SliderButton__icon", {
        "fa-arrow-left": direction === Direction.PREV,
        "fa-arrow-right": direction === Direction.NEXT,
        "SliderButton__icon--disabled": disabled,
      })}
    />
  </button>
);
