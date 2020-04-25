import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dispatch, State } from '../store';

const useGetBook = () => {
  const dispatch = useDispatch<Dispatch>();
  const data = useSelector((state: State) => state.books.current);

  const getById = useCallback(
    (id: string) => {
      dispatch.books.get(id);
    },
    [dispatch],
  );

  const unselect = useCallback(() => {
    dispatch.books.unselect();
  }, [dispatch]);

  return {
    data,
    getById,
    unselect,
  };
};

export default useGetBook;
