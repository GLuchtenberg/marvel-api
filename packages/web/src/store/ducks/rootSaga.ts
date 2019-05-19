import { all, takeLatest } from 'redux-saga/effects';

import { HeroTypes } from './heros/types';
import { load } from './heros/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(HeroTypes.LOAD_REQUEST, load),
  ]);
}
