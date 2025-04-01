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
      maxWidth: '400px',
      margin: '0 auto',
      padding: '2rem',
    },
    buttons: {
      primary: {
        backgroundColor: '#6E37FF', // Claude's signature purple
        borderColor: '#6E37FF',
        borderRadius: '8px',
        '&:hover': {
          backgroundColor: '#5925FF', // Slightly darker shade for hover state
        },
      },
    },
    colors: {
      primary: '#6E37FF', // Claude's signature purple
      background: '#FFFFFF', // Clean white background
      text: '#1A1825', // Dark text for readability
      borders: '#E5E5E5', // Subtle border color
    },
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    text: {
      fontSize: '16px',
      lineHeight: '1.5',
    },
    input: {
      borderRadius: '8px',
    },
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