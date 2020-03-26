import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { NotFoundPage } from './pages/NotFound';
import { AlbumPage } from './pages/AlbumPage';
import { ArtistPage } from './pages/ArtistPage';
import { SongPage } from './pages/SongPage';

export const App = () => {
  const supportsHistory = 'pushState' in window.history;

  return (
    <Router forceRefresh={!supportsHistory}>
      <Switch>
        <Redirect exact path="/" to="/song/holiday" />
        <Route path="/album/:query?" component={AlbumPage} />
        <Route path="/artist/:query?" component={ArtistPage} />
        <Route path="/song/:query?" component={SongPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};
