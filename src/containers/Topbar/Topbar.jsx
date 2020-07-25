import React from 'react';
import { useSelector } from 'react-redux';
import './Topbar.scss';

import { Logo } from '../../components';
import { Link } from 'react-router-dom';


const Topbar = () => {
  const user = useSelector(state => state.user);

  return (
    <header className="topbar" data-testid="topbar">
      <div className="container">
        <Link to="/dashboard">
          <Logo />
        </Link>

        <div className="user">
          <span className="user__name">{user.name}</span>

          <figure className="user__thumb">
            <img src={user.thumb} alt={`foto de perfil de ${user.name}`} />
          </figure>
        </div>
      </div>
    </header>
  )
}

export default Topbar;
