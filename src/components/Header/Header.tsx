/* eslint-disable curly */

import React from 'react';
import { Dimensions } from 'react-native';
import Styled from 'styled-components/native';

import Icon from '../Icon';

const { width } = Dimensions.get('window');

const Container = Styled.View`
  align-items: center;
  flex: 0 66px;
  flex-direction: column;
  justify-content: center;
  width: ${width};
`;

const Separator = Styled.View`
  background-color: #F0D10F;
  height: 2px;
  width: 119px;
`;

const Content = Styled.View`
  align-items: center;
  flex-direction: row;
  height: 64px;
  justify-content: space-between;
  width: ${width};
`;

const Action = Styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 60px;
`;

const Title = Styled.Text`
  color: ${({ theme }) => theme.colors.textDark}
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  flex: 1;
  line-height: 23;
  text-align: center;
`;

interface HeaderProps {
  back?: (() => void) | false;
  filter?: boolean;
}

const Header: React.FC<HeaderProps> = ({ back, filter }) => {
  function renderBack() {
    if (back === false) return <Action />;
    return (
      <Action onPress={back}>
        <Icon source={require('../Icon/images/arrow.png')} />
      </Action>
    );
  }

  function renderFilter() {
    if (filter === false) return <Action />;
    return (
      <Action>
        <Icon source={require('../Icon/images/search.png')} />
      </Action>
    );
  }

  return (
    <Container>
      <Content>
        {renderBack()}
        <Title>Pixter Books</Title>
        {renderFilter()}
      </Content>
      <Separator />
    </Container>
  );
};

Header.defaultProps = {
  back: false,
  filter: false,
};

export default Header;
