import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import { isPointWithinRadius } from 'geolib';

import { Dispatch, State } from 'store';

export interface Position
  extends Pick<GeolocationResponse['coords'], 'latitude' | 'longitude'> {}

interface GeolocationType {
  ref: number | null;
  positions: Position[];
}

const initialState: GeolocationType = {
  ref: null,
  positions: [],
};

const defaultOptions = {
  distanceFilter: 30,
};

const geolocation = {
  state: initialState,
  reducers: {
    setRef(state: State, ref: number | null) {
      return { ...state, ref };
    },
    setPosition(state: State, positions: Position[]) {
      return { ...state, positions };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async init(customOptions: any, state: State) {
      const options = Object.assign({}, defaultOptions, customOptions);
      const bookstores = state.bookstores.items;

      dispatch.geolocation.setPosition(bookstores);

      const ref = Geolocation.watchPosition(
        ({ coords }: GeolocationResponse) => {
          const nearby: boolean[] = bookstores.map((bookstore) => {
            const isNearby = isPointWithinRadius(coords, bookstore.coords, 300);

            if (isNearby) {
              dispatch.bookstores.setNearest(bookstore);
            }

            return isNearby;
          });

          if (nearby.filter(Boolean).length === 0) {
            dispatch.bookstores.setNearest(null);
          }
        },
        () => {},
        options,
      );

      dispatch.geolocation.setRef(ref);
    },
    getCurrentPosition() {
      return Geolocation.getCurrentPosition;
    },
  }),
};

export default geolocation;
