import Styled from 'styled-components/native';

import { Paragraph, Title } from '../../../components';

import BuyButton from './BuyButton';
import FavoriteButton from './FavoriteButton';
import Heading from './Heading';

const Container = Styled.ScrollView`
  background-color: white;
  flex: 1;
`;

const Row = Styled.View`
  flex-direction: row;
`;

const CoverColumn = Styled.View`
  align-items: center;
  width: 120px;
`;

const DetailsColumn = Styled.View`
  padding: 0 15px;
  flex: 1;
`;

const Cover = Styled.Image`
  background-color: black;
  box-shadow: 0px 20px 33px rgba(184, 118, 12, 0.725119);
  height: 130px;
  width: 100px;
`;

const Author = Styled(Paragraph)`
  color: #9F8B0C;
  line-height: 14;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Actions = Styled(Row)`
  margin-top: 20px;
  justify-content: flex-end;
`;

const PageCount = Styled(Paragraph)`
  color: #9F8B0C;
  margin-top: 20px;
`;

const DescriptionWrapper = Styled.View`
  background-color: white;
  padding: 31px 17px;
`;

const Price = Styled(Title)``;

export {
  Actions,
  Author,
  BuyButton,
  Container,
  Cover,
  CoverColumn,
  DescriptionWrapper,
  DetailsColumn,
  FavoriteButton,
  Heading,
  PageCount,
  Price,
  Row,
};
