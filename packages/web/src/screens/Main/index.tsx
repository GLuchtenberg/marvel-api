/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import InfiniteScroll from 'react-infinite-scroller';
import { Paper, Typography } from '@material-ui/core';
import { Hero } from '../../store/ducks/heros/types';
import { ApplicationState } from '../../store';

import * as HeroActions from '../../store/ducks/heros/actions';

import HeroList from '../../components/HeroList';
import Loading from '../../components/Loading';

interface StateProps {
  heros: Hero[],
  offset: number,
}

interface DispatchProps {
  loadRequest(offest: number): void
}

type Props = StateProps & DispatchProps

const MainPage = ({ heros, loadRequest, offset }: Props) => (
  <Paper>
    <Typography component="h2" variant="h1" gutterBottom> Heróis da Marvel! </Typography>
    <InfiniteScroll
      pageStart={offset}
      loadMore={loadRequest}
      loader={<Loading />}
      hasMore
    >
      <HeroList heros={heros} />
    </InfiniteScroll>
  </Paper>
    );
const mapStateToProps = (state: ApplicationState) => ({
  heros: state.heros.data,
  offset: state.heros.offset,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(HeroActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
