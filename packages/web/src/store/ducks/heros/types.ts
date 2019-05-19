import { Page } from '../../../services/marvel/types';

export enum HeroTypes {
    LOAD_REQUEST= '@heros/LOAD_REQUEST',
    LOAD_SUCCESS= '@heros/LOAD_SUCCESS',
    LOAD_FAILURE= '@heros/LOAD_FAILURE'
}

interface Thumbnail {
    extension: string,
    path: string
}

export interface Hero {
    id: number,
    name: string,
    thumbnail: Thumbnail,
    description: string,
    comics: any,
    stories: any,
    series: any
}

export interface HerosState {
    readonly data: Hero[],
    readonly loading: boolean,
    readonly error: boolean,
    readonly offset: number,
}
export interface HeroPage extends Page{
    results: Hero[]
}
