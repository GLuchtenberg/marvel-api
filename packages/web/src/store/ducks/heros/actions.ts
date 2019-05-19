import { action } from 'typesafe-actions';
import { HeroTypes, Hero } from './types';

export const loadRequest = (page: number) => action(HeroTypes.LOAD_REQUEST, { page });

export const loadSuccess = (data: Hero[]) => action(HeroTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(HeroTypes.LOAD_FAILURE);
