import React  from 'react';

import { Loading, RouteHeader } from '../../components';
import PlaylistItem from './PlaylistItem';

import './Playlists.scss';

const Playlists = ({ data, categoryName, categoryId, isLoading = false, path }) => (
  <div className="playlists" data-testid="playlists">
    <div className="container">
      <RouteHeader
        categoryName={categoryName}
        path={path}
      />

      {isLoading
        ? (<Loading text="Carregando playlists..."/>)
        : (
          <div className="playlists__content">
            {data.length && data.map(playlist => (
              <PlaylistItem
                categoryId={categoryId}
                description={playlist.description}
                id={playlist.id}
                image={playlist.images[0]}
                key={playlist.id}
                name={playlist.name}
                path={path}
              />
            ))}
          </div>
        )}
    </div>
  </div>
);

export default Playlists;