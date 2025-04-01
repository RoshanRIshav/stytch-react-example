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
        backgroundColor: '#8E44AD', // Claude's primary purple color
        borderColor: '#8E44AD',
        '&:hover': {
          backgroundColor: '#6C3483', // Darker purple for hover state
        },
      },
    },
    colors: {
      primary: '#8E44AD', // Claude's primary purple color
      background: '#FFFFFF', // White background
      text: '#333333', // Dark text for readability
    },
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
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