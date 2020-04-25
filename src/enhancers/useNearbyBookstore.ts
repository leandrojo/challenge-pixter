import { useSelector } from 'react-redux';

import { State } from '../store';

const useNearbyBookstore = () => {
  const data = useSelector((state: State) => state.bookstores.nearest);

  return {
    data,
  };
};

export default useNearbyBookstore;
