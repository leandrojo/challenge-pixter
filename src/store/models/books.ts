import { Dispatch, State } from 'store';

import * as services from '../../services';

export interface Book {
  id: string;
  volumeInfo: {
    authors: string[];
    description: string;
    subtitle: string;
    title: string;
    pageCount: number;
    imageLinks: {
      thumbnail: string;
    };
  };
  saleInfo: {
    buyLink: string;
    saleability: 'FOR_SALE' | 'NOT_FOR_SALE';
    retailPrice: {
      amount: number;
      currencyCode: string;
    };
  };
}

interface BooksType {
  current: Book | null;
  index: number;
  items: Book[];
  isLoading: boolean;
  isRefreshing: boolean;
  predicate: string;
  totalItems: number;
}

const initialState: BooksType = {
  current: null,
  index: 0,
  items: [],
  isLoading: false,
  isRefreshing: false,
  predicate: '',
  totalItems: 0,
};

const books = {
  state: initialState,
  reducers: {
    setCurrent(state: State, current: Book | null) {
      return { ...state, current };
    },
    setIndex(state: State, index: number) {
      return { ...state, index };
    },
    setItems(state: State, items: Book[]) {
      return { ...state, items };
    },
    setIsLoading(state: State, isLoading: boolean) {
      return { ...state, isLoading };
    },
    setIsRefreshing(state: State, isRefreshing: boolean) {
      return { ...state, isRefreshing };
    },
    setPredicate(state: State, predicate: string) {
      return { ...state, predicate };
    },
    setTotalItems(state: State, totalItems: number) {
      return { ...state, totalItems };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async fetch(predicate: string, state: State) {
      dispatch.books.setIsLoading(true);

      const index =
        predicate === state.books.predicate ? state.books.index + 15 : 0;

      const response = await services.books.fetch(predicate, index);

      dispatch.books.setTotalItems(response.totalItems);
      dispatch.books.setPredicate(predicate);
      dispatch.books.setIndex(index);

      dispatch.books.setItems(
        index !== 0
          ? [...state.books.items, ...response.items]
          : response.items,
      );

      dispatch.books.setIsLoading(false);
    },
    get(id: string, state: State) {
      const book = state.books.items.find((item: Book) => item.id === id);
      dispatch.books.setCurrent(book ?? null);
    },
    async refresh(newPredicate: string, state: State) {
      const { predicate } = state.books;

      dispatch.books.setIsRefreshing(true);

      dispatch.books.setPredicate('');
      dispatch.books.setIndex(0);

      await dispatch.books.fetch(newPredicate ?? predicate);

      dispatch.books.setIsRefreshing(false);
    },
    unselect() {
      dispatch.books.setCurrent(null);
    },
  }),
};

export default books;
