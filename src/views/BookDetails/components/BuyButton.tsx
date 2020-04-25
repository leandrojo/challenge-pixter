import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

import { Book } from 'store/models/books';

import { Paragraph } from '../../../components';

const Content = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.complementary};
  border-radius: 100px;
  height: 36px;
  justify-content: center;
  width: 116px;
`;

const Text = styled(Paragraph)`
  color: white;
  font-size: 13px;
  font-weight: bold;
`;

interface BuyProps {
  data: Book;
}

const BuyButton: React.FC<TouchableOpacityProps> = () => {
  return (
    <Content>
      <Text>BUY</Text>
    </Content>
  );
};

export default BuyButton;
