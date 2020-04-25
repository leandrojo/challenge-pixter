import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

interface RateStyledProps {
  selected: boolean;
}

const RateStyled = styled.Image<RateStyledProps>`
  margin: 3px;
  tint-color: ${({ selected }) => (selected ? '#4C4309' : '#E4C81B')};
`;

const RatingStyled = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left: 10px;
`;

interface RatingProps {
  initial?: number;
  onChange: (n: number) => void;
}

const Rating: React.FC<RatingProps> = ({ initial, onChange }) => {
  const [rate, setRate] = useState(initial || 0);

  useEffect(() => {
    onChange(rate);
  }, [onChange, rate]);

  return (
    <RatingStyled>
      {Array.from({ length: 5 }, (v, k) => k).map((key) => {
        return (
          <TouchableWithoutFeedback key={key} onPress={() => setRate(key + 1)}>
            <RateStyled
              selected={rate >= key + 1}
              source={require('../Icon/images/star.png')}
            />
          </TouchableWithoutFeedback>
        );
      })}
    </RatingStyled>
  );
};

Rating.defaultProps = {
  initial: 1,
  onChange: () => {},
};

export default Rating;
