import React from 'react';
import { Dimensions } from 'react-native';
import Styled from 'styled-components/native';

import { Paragraph } from '../../components';
import useNearbyBookstore from '../../enhancers/useNearbyBookstore';

const { width } = Dimensions.get('window');

const Container = Styled.View`
  background-color: ${({ theme }) => theme.colors.complementary};
  flex: 0 90px;
  justify-content: center;
  padding: 0 20px;
  width: ${width};
`;

const Description = Styled(Paragraph)`
  color: ${({ theme }) => theme.colors.textExtraLight};
  font-size: 18px;
  font-weight: bold;
  line-height: 24;
`;

// TODO: Apply in/out animation.

const BookstoreNearby: React.FC = () => {
  const bookstore = useNearbyBookstore().data;

  if (bookstore === null) {
    return null;
  }

  return (
    <Container>
      <Description>
        {`Buy your favorite books now, ${bookstore.name} is near here.`}
      </Description>
    </Container>
  );
};

export default BookstoreNearby;
