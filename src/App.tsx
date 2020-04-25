import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Styled, { ThemeProvider } from 'styled-components/native';

import theme from './theme';
import store from './store';

import BookList from './views/BookList';
import BookDetails from './views/BookDetails';
import BookstoreNearby from './views/BookstoreNearby';

export const AppContext = React.createContext({});

const Container = Styled.View`
  background-color: ${theme.backgroundColor};
  flex: 1;
`;

const SafeAreaView = Styled.SafeAreaView`
  flex: 1;
`;

const App: React.FC = () => {
  useEffect(() => {
    store.dispatch.geolocation.init();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" translucent />
        <Container>
          <SafeAreaView>
            <BookList />
            <BookDetails />
            <BookstoreNearby />
          </SafeAreaView>
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
