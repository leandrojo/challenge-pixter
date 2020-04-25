import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dispatch, State } from '../store';

const useFetchBooks = () => {
  const dispatch = useDispatch<Dispatch>();
  const { isLoading, isRefreshing, items } = useSelector(
    (state: State) => state.books,
  );

  const refresh = useCallback(() => {
    dispatch.books.refresh();
  }, [dispatch]);

  const search = useCallback(
    (predicate: string) => {
      dispatch.books.fetch(predicate);
    },
    [dispatch],
  );

  return {
    isLoading,
    isRefreshing,
    items,
    refresh,
    search,
  };
};

export default useFetchBooks;
