import React from 'react';
import {
    render,
    fireEvent,
    cleanup,
  } from 'react-testing-library';
import HeroCard from './HeroCard';

afterEach(cleanup);
describe('HeroCard', () => {
    const defaultProps = {
        classes: {
            card: '',
            media: '',
        },
        hero: {
            comics: {
                available: 31, collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009158/comics', items: Array(20), returned: 20,
            },
            description: '',
            events: {
                available: 2,
            },
            returned: 2,
            id: 1009158,
            name: 'Arcade',
            series: {
            available: 21, collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009158/series', items: Array(20), returned: 20,
            },
            stories: {
                available: 29, collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009158/stories', items: Array(20), returned: 20,
            },
            thumbnail: { path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/4c0042091ab69', extension: 'jpg' },
        },
    };
    const createWrapper = () => render(<HeroCard {...defaultProps} />);
    it('Should not render with info modal open', () => {
        const { queryByTestId } = createWrapper();
        expect(queryByTestId('hero-modal')).not.toBeInTheDocument();
    });
    it('Should open modal with info when click on card', () => {
        const { getByTestId } = createWrapper();
        fireEvent.click(getByTestId('action-area'));
        expect(getByTestId('hero-modal')).toBeInTheDocument();
    });

    it('Should close modal with info when press esc', () => {
        const { getByTestId, queryByTestId } = createWrapper();
        fireEvent.click(getByTestId('action-area'));
        fireEvent.keyDown(getByTestId('hero-modal'), {
            key: 'Escape',
            keyCode: 27,
            which: 27,
        });
        expect(queryByTestId('hero-modal')).not.toBeInTheDocument();
    });
});
