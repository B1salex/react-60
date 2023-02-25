import { PropTypes } from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { GiFat } from 'react-icons/gi';

import { MdOutlineFastfood } from 'react-icons/md';
import { CardWrapper } from './Recipe.styled';
export const Recipe = ({
  recipe: { name, image, calories, time, servings },
}) => {
  return (
    <CardWrapper>
      <h2>{name}</h2>
      <img src={image} alt={name} width="240"></img>
      <div>
        <p>
          <BsAlarm /> {time} min
        </p>
        <p>
          <MdOutlineFastfood /> {servings} servings
        </p>
        <p>
          <GiFat /> {calories} calories
        </p>
        <div>
          <h3>Difficulty</h3>
        </div>
        <div>
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>
    </CardWrapper>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
