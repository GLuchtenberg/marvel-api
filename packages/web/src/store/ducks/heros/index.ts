/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from 'redux';
import { HerosState, HeroTypes, Hero } from './types';
import { Page } from '../../../services/marvel/types';


const INITIAL_STATE: HerosState = {
  data: [],
  error: false,
  loading: false,
  offset: 0,
};
const reducer: Reducer<HerosState> = (state = INITIAL_STATE, action) => {
  let page : Page;
  let data: Hero[];

  switch (action.type) {
    case HeroTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case HeroTypes.LOAD_SUCCESS:
      page = action.payload.data.data;
      data = [...state.data, ...page.results];
      return {
      ...state, loading: false, error: false, offset: page.offset, data,
      };
    case HeroTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
