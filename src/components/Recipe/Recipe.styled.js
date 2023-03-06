import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 8px;
  width: 320px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 8px;
`;

export const InfoBlock = styled.div`
  display: flex;
  margin: 0;
  padding: 8px 0;
  align-items: center;

  svg {
    color: blueviolet;
  }
`;

export const BedgList = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
`;

export const Bedg = styled.span`
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
  font-style: oblique;

  background-color: ${({ isActive, variant }) => {
    let color;
    switch (variant) {
      case 'easy':
        return isActive ? 'green' : (color = 'silver ');
      case 'medium':
        return isActive ? 'blue' : (color = 'silver ');
      case 'hard':
        return isActive ? 'red' : (color = 'silver ');

      default:
        throw new Error('Your are dump');
    }
  }};

  color: ${props => {
    return props.isActive ? 'white' : 'black';
  }};
`;
