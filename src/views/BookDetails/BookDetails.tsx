/* eslint-disable curly */

import React from 'react';

import { Header, Paragraph } from '../../components';
import { useGetBook } from '../../enhancers';

import { Container, DescriptionWrapper, Heading } from './components';

const BookDetails: React.FC = () => {
  const { data, unselect } = useGetBook();

  const handleBack = () => {
    unselect();
  };

  if (data === null) return null;

  function renderDescription() {
    if (typeof data?.volumeInfo?.description !== 'string') return null;
    return (
      <DescriptionWrapper>
        <Paragraph>{data.volumeInfo.description}</Paragraph>
      </DescriptionWrapper>
    );
  }

  return (
    <>
      <Header back={handleBack} />
      <Container>
        <Heading data={data} />
        {renderDescription()}
      </Container>
    </>
  );
};

export default BookDetails;
