import React from 'react';
import Layout from '../../components/Layout';
import PlaylistBar from '../../components/Playlist/PlaylistBar';

function action() {
  // Why not?
  return {
    title: 'Waga Player',
    chunks: ['playlists'],
    component: (
      <Layout>
        <PlaylistBar />
      </Layout>
    ),
  };
}

export default action;
