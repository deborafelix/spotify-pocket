import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPlaylistTracksRequest,
  getPlaylistTracksSuccess,
  getPlaylistTracksFailed,
  logout,
} from '../actions';

import { endpoints } from '../modules/endpoints';
import { request, sanitizeUrl } from '../modules/request';

import { Tracks } from '../containers';

const { getPlaylistTracks } = endpoints;

const TracksRoute = ({ path }) => {
  const { auth, content } = useSelector(state => state);
  const dispatch = useDispatch();
  const { playlistId } = useParams();




  const getContentNameById = (id = '', list = []) => {
    if (!id && list.length === 0) {
      return '';
    }
  
    const { name = '' } = list.find(item =>  id === item.id) || '';
  
    return name;
  }
  
  useEffect(() => {
    const requestOptions = {
      ...getPlaylistTracks.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getPlaylistTracksRequest());

    request(sanitizeUrl(getPlaylistTracks.url,{ playlistId }), requestOptions)
      .then(data => dispatch(getPlaylistTracksSuccess(data)))
      .catch(error => {
        if (error === 401) {
          dispatch(logout());

          return;
        }

        dispatch(getPlaylistTracksFailed(error));
      });

  }, [auth, playlistId, dispatch]);

  return (
    <Tracks
      categoryName={getContentNameById(playlistId, content.playlists)}
      data={content.tracks}
      isLoading={content.status === 'running'}
      path={path}
    />
  );
}

export default TracksRoute;