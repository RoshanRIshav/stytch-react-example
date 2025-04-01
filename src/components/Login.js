import React from 'react';
import { StytchLogin } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = () => {
  const styles = {
    container: {
      width: '100%',
    },
    buttons: {
      primary: {
        backgroundColor: '#1DB954', // Spotify's primary green color
        borderColor: '#1DB954',
        '&:hover': {
          backgroundColor: '#1ed760', // Slightly lighter green for hover state
        },
      },
    },
    colors: {
      primary: '#1DB954', // Spotify's primary green color
      background: '#191414', // Spotify's dark background
      text: '#FFFFFF', // White text for contrast
      secondary: '#B3B3B3', // Spotify's secondary gray color
    },
    fontFamily: 'Circular, Helvetica, Arial, sans-serif', // Spotify-like font stack
  };
  const config = {
    products: [Products.emailMagicLinks],
    emailMagicLinksOptions: {
      loginRedirectURL: 'http://localhost:3000/authenticate',
      loginExpirationMinutes: 60,
      signupRedirectURL: 'http://localhost:3000/authenticate',
      signupExpirationMinutes: 60,
    },
  };

  return <StytchLogin config={config} styles={styles} />;
};

export default Login;