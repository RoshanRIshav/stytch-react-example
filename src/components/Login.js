import React from 'react';
import { StytchLogin } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = () => {
  // OpenAI Branding: Modern, minimalist; using OpenAI primary and secondary colors
  const styles = {
    container: {
      width: '100%',
      backgroundColor: '#FFFFFF', // OpenAI secondary (white)
      color: '#000000', // OpenAI secondary (black)
      borderRadius: '12px', // modern clean shape
      boxShadow: '0 2px 16px rgba(0,163,224,0.08)', // subtle blue shadow
      padding: '2rem 1.25rem',
      margin: '2rem auto',
      maxWidth: 420
    },
    buttons: {
      primary: {
        backgroundColor: '#FFB800', // OpenAI primary yellow
        color: '#000000', // text black
        borderColor: '#00A3E0', // OpenAI primary blue for border
        borderRadius: '8px',
        fontWeight: 600,
        letterSpacing: '0.03em',
        boxShadow: 'none',
        transition: 'background .2s',
        '&:hover': {
          backgroundColor: '#00A3E0', // blue hover
          color: '#FFFFFF', // white text on hover
        },
      },
    },
    colors: {
      primary: '#FFB800', // OpenAI primary yellow
      background: '#FFFFFF', // white bg
      text: '#000000', // black text
      secondary: '#00A3E0', // OpenAI primary blue
      border: '#00A3E0', // blue border
    },
    fontFamily: 'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
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
