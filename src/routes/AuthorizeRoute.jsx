import React, { useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { Authorize } from '../containers';
import { useDispatch, useSelector } from 'react-redux';

import { handleSuccessAuth, handleFailureAuth } from '../actions';
import { retrieveUrlInfo } from '../modules/url';

const AuthorizeRoute = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const authInfo = useSelector((store) => store.auth);


  useEffect(() => {
    const authData = retrieveUrlInfo(location.hash);
    if(authData && authData.errorMessage.length > 0 ) {
      dispatch(handleFailureAuth(authData));
      return 
    } 
    setTimeout(() => {
      dispatch(handleSuccessAuth(authData));
    }, 3000)
  }, [dispatch, location]);


  const { isLogged } = authInfo;

  return (
    <>
      { isLogged ? <Redirect to={{ pathname: '/dashboard' }}/> : <Authorize /> }
    </>
  );
};

export default AuthorizeRoute;
