import React from 'react';

import { Logo } from '../../components';
import './Login.scss';
import { config } from '../../config';

import backgroundImageMobile from '../../assets/images/app-intro-1.jpg';
import backgroundImageDesktop from '../../assets/images/app-intro-2.jpg';


const Login = () => {
  const { spotify }  = config;
  const url = `${spotify.authorizationURL}?client_id=${spotify.clientId}${(spotify.scopes ? '&scope=' + encodeURIComponent(spotify.scopes) : '')}&redirect_uri=${encodeURIComponent(spotify.redirectUrl)}&response_type=token&show_dialog=true`
  return(
    <main 
      style={{backgroundImage: `url(${backgroundImageDesktop})`}}
      className="login" 
      data-testid="login"
    >
      <div className="container">
        <Logo></Logo>
        <h2 className="login__microcopy">
          Escute de novo,
          <strong> Continue curtindo suas músicas de onde parou <span role="img" className="login__microcopy__heart" aria-label="Coração">❤️</span></strong>
        </h2>
        <a href={url}>
          <button className="login__auth-button">
            Faça Login com o Spotify
          </button>
        </a>
      </div>
    </main>
  )
};

export default Login;
