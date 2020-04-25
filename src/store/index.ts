import { init, RematchRootState } from '@rematch/core';

import * as models from './models';

const store = init({
  models,
});

export type Dispatch = typeof store.dispatch;
export type State = RematchRootState<typeof models>;

export default store;
