import { PropTypes } from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { GiFat } from 'react-icons/gi';

import { MdOutlineFastfood } from 'react-icons/md';
import {
  CardWrapper,
  Image,
  InfoBlock,
  RecipeInfo,
  BedgList,
  Bedg,
} from './Recipe.styled';
export const Recipe = ({
  recipe: { name, image, calories, time, servings, difficulty },
}) => {
  return (
    <CardWrapper>
      <h2>{name}</h2>
      <Image src={image} alt={name} width="240"></Image>
      <RecipeInfo>
        <InfoBlock>
          <BsAlarm size={24} /> {time} min
        </InfoBlock>
        <InfoBlock>
          <MdOutlineFastfood size={24} /> {servings} servings
        </InfoBlock>
        <InfoBlock>
          <GiFat size={24} /> {calories} calories
        </InfoBlock>
      </RecipeInfo>
      <div>
        <h3>Difficulty</h3>
        <BedgList>
          <Bedg variant="easy" isActive={difficulty === 'easy'}>
            Easy
          </Bedg>
          <Bedg variant="medium" isActive={difficulty === 'medium'}>
            Medium
          </Bedg>
          <Bedg variant="hard" isActive={difficulty === 'hard'}>
            Hard
          </Bedg>
        </BedgList>
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
