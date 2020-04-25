/* eslint-disable curly */

import React from 'react';
import styled from 'styled-components/native';

import { Book } from 'store/models/books';

import { Rating, Title } from '../../../components';

import { Actions, BuyButton, FavoriteButton } from '.';

import {
  Author,
  Cover,
  CoverColumn,
  DetailsColumn,
  PageCount,
  Price,
  Row,
} from '.';

const HeadingStyled = styled.View`
  background-color: ${({ theme }) => theme.backgroundColor}
  flex: 1;
  flex-direction: row;
  padding: 24px 10px 20px;
`;

interface HeadingProps {
  data: Book;
}

const Heading: React.FC<HeadingProps> = ({ data }) => {
  function renderAuthors() {
    if (typeof data?.volumeInfo?.authors !== 'object') return null;
    return <Author>{`by ${data.volumeInfo.authors?.join(', ')}`}</Author>;
  }

  function renderPage() {
    if (typeof data.volumeInfo.pageCount !== 'number') return null;
    return <PageCount>{`${data.volumeInfo.pageCount} pages`}</PageCount>;
  }

  function renderPrice() {
    if (data.saleInfo.saleability === 'NOT_FOR_SALE') {
      return (
        <Row>
          <Price>No sale</Price>
          <Rating initial={5} onChange={() => {}} />
        </Row>
      );
    }

    return (
      <Row>
        <Price>{`$${data.saleInfo.retailPrice.amount.toFixed(2)}`}</Price>
        <Rating initial={5} onChange={() => {}} />
      </Row>
    );
  }

  function renderActions() {
    return (
      <Actions>
        <BuyButton />
        <FavoriteButton />
      </Actions>
    );
  }

  return (
    <HeadingStyled>
      <CoverColumn>
        <Cover source={{ uri: data.volumeInfo.imageLinks.thumbnail }} />
        {renderPage()}
      </CoverColumn>
      <DetailsColumn>
        <Title>{data.volumeInfo.title}</Title>
        {renderAuthors()}
        {renderPrice()}
        {renderActions()}
      </DetailsColumn>
    </HeadingStyled>
  );
};

export default Heading;
