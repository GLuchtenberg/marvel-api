import { call, put } from 'redux-saga/effects';
import { getHeros } from '../../../services/marvel/api';

import { loadSuccess, loadFailure } from './actions';

export function* load(action : any) {
  try {
    const { page } = action.payload;
    const response = yield call(getHeros, page);

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
