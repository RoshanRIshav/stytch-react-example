import React from 'react';
import { StytchLogin } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = () => {
  // OpenAI Branding: Modern, minimalist; with OpenAI blue and yellow accents
  const styles = {
    container: {
      width: '100%',
      backgroundColor: '#FFFFFF', // secondary color (light background)
      color: '#000000', // secondary color (dark text)
      borderRadius: '12px', // modern, clean line
      boxShadow: '0 2px 24px rgba(0,127,255,0.10)',
      padding: '2rem 1.25rem',
      margin: '2rem auto',
      maxWidth: 420
    },
    buttons: {
      primary: {
        backgroundColor: '#007FFF', // OpenAI blue
        color: '#FFFFFF', // white text
        borderColor: '#F9A825', // OpenAI yellow border accent
        borderRadius: '8px',
        fontWeight: 600,
        letterSpacing: '0.03em',
        boxShadow: 'none',
        transition: 'background .2s',
        '&:hover': {
          backgroundColor: '#F9A825', // yellow on hover
          color: '#000000',
        },
      },
    },
    colors: {
      primary: '#007FFF', // OpenAI blue
      background: '#FFFFFF', // white bg
      text: '#000000', // dark text
      secondary: '#F9A825', // yellow accent
      border: '#F9A825', // yellow accent border
    },
    fontFamily: 'Inter, Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
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
