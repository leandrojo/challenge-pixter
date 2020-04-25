import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

import { Book } from 'store/models/books';

import { Icon } from '../../../components';

const Content = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
  height: 36px;
  justify-content: center;
  width: 36px;

  /* TODO: Remove fix margin. */
  margin-left: 8px;
`;

interface BuyProps {
  data: Book;
}

const FavoriteButton: React.FC<TouchableOpacityProps> = () => {
  return (
    <Content>
      <Icon source={require('../../../components/Icon/images/heart.png')} />
    </Content>
  );
};

export default FavoriteButton;
