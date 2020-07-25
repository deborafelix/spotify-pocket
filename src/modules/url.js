const getToken = (queryParams) => {
  return queryParams[0].split('=')[1];
};

const getTokenType = (queryParams) => {
  return queryParams[1].split('=')[1];
};

const getExpirationTime = (queryParams) => {
  return queryParams[2].split('=')[1];
};

const getErrorMessage = (queryParams) => {
  return queryParams[0].split('=')[1];
}

export const retrieveUrlInfo = (url) => {
  const queryParams = url.split('&');
  if (queryParams[0].includes('access_token')) {
    const accessToken = getToken(queryParams);
    const tokenType = getTokenType(queryParams);
    const expirationTime = getExpirationTime(queryParams);
    return {
      accessToken,
      expirationTime,
      expiresIn: '',
      errorMessage: '',
      isLogged: true,
      tokenType,
    }
  } else if(queryParams[0].includes('error=')) {
    return {
      errorMessage: getErrorMessage(queryParams)
    }
  }
}