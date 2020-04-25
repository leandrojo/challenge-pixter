import { Dispatch, State } from 'store';

import { Position } from './geolocation';

export interface BookStore {
  name: string;
  coords: Position;
  address: string;
}

interface BookStoresType {
  nearest: BookStore | null;
  items: BookStore[];
}

const initialState: BookStoresType = {
  nearest: null,
  items: [
    {
      name: 'Livraria Cultura',
      address: 'Av. Paulista, 2073',
      coords: {
        latitude: -23.5587296,
        longitude: -46.6601372,
      },
    },
    {
      name: 'Livraria Saraiva',
      address: 'R. Maestro Cardim, 1947',
      coords: {
        latitude: -23.5702876,
        longitude: -46.6444531,
      },
    },
  ],
};

const bookstores = {
  state: initialState,
  reducers: {
    setNearest(state: State, nearest: BookStore | null) {
      return { ...state, nearest };
    },
    setItems(state: State, items: BookStore[]) {
      return { ...state, items };
    },
    setIsLoading(state: State, isLoading: boolean) {
      return { ...state, isLoading };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async fetch() {
      dispatch.bookstores.setIsLoading();
    },
  }),
};

export default bookstores;
