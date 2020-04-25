import React, { useEffect } from 'react';
import { FlatList, TouchableWithoutFeedback } from 'react-native';
import Styled from 'styled-components/native';

import { Book } from 'store/models/books';

import { Header } from '../../components';
import { useFetchBooks, useGetBook } from '../../enhancers';

const Container = Styled.View`
  flex: 1;
  flex-direction: row;
`;

const Item = Styled.View`
  align-items: center;
  flex-grow: 1;
  padding: 0 10px;
`;

const Cover = Styled.Image.attrs({ resizeImage: 'contain' })`
  height: 130px;
  width: 100px;
`;

const RowStyled = { padding: 8, paddingTop: 25, paddingBottom: 5 };

const BookList: React.FC = () => {
  const { isRefreshing, items, refresh, search } = useFetchBooks();
  const { data, getById } = useGetBook();

  useEffect(() => {
    search('Design');
  }, [search]);

  const handleRefresh = () => {
    refresh();
  };

  const handleSearch = () => {
    search('Design');
  };

  const handleSelect = (id: string) => {
    getById(id);
  };

  if (data !== null) {
    return null;
  }

  return (
    <>
      <Header filter />
      <Container>
        <FlatList
          columnWrapperStyle={RowStyled}
          data={items}
          keyExtractor={(item: Book) => item.id}
          numColumns={3}
          onRefresh={handleRefresh}
          refreshing={isRefreshing}
          onEndReached={handleSearch}
          onEndReachedThreshold={0.3}
          renderItem={({ item }) => {
            const { id, volumeInfo } = item;
            return (
              <Item key={id}>
                <TouchableWithoutFeedback onPress={() => handleSelect(id)}>
                  <Cover source={{ uri: volumeInfo.imageLinks?.thumbnail }} />
                </TouchableWithoutFeedback>
              </Item>
            );
          }}
        />
      </Container>
    </>
  );
};

export default BookList;
