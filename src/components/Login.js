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
      padding: '20px',
    },
    buttons: {
      primary: {
        backgroundColor: '#000000', // OpenAI's black
        borderColor: '#000000',
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: '#202123', // Slightly lighter black for hover
        },
      },
    },
    colors: {
      primary: '#000000', // OpenAI's black
      background: '#FFFFFF', // White background
      text: '#202123', // OpenAI's text color
    },
    fontFamily: 'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
    inputs: {
      textInput: {
        borderRadius: '4px',
        borderColor: '#E5E5E5',
        '&:focus': {
          borderColor: '#000000',
          boxShadow: '0 0 0 1px #000000',
        },
      },
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