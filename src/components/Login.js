import React from 'react';
import { StytchLogin } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = () => {
  // OpenAI Branding: Modern, minimalist, focus on tech & innovation
  const styles = {
    container: {
      width: '100%',
      backgroundColor: '#FFFFFF', // White background (secondary)
      color: '#000000', // Black text (secondary)
      borderRadius: '14px',
      border: '1px solid #00A3E0', // Blue accent (primary)
      boxShadow: '0 4px 24px rgba(0,163,224,0.08)', // Subtle blue shadow
      padding: '2rem 1.5rem',
      margin: '2rem auto',
      maxWidth: 440,
      fontFamily: 'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, "Noto Sans", sans-serif',
    },
    buttons: {
      primary: {
        backgroundColor: '#FFB800', // OpenAI yellow (primary)
        color: '#000000',           // Black text
        borderRadius: '8px',
        border: 'none',
        fontWeight: 700,
        letterSpacing: '0.04em',
        boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
        transition: 'background .2s',
        '&:hover': {
          backgroundColor: '#00A3E0', // OpenAI Blue on hover
          color: '#FFFFFF',           // White text on hover
        },
      },
    },
    colors: {
      primary: '#FFB800',
      accent: '#00A3E0',
      background: '#FFFFFF',
      text: '#000000',
      secondary: '#00A3E0',
      border: '#00A3E0',
    },
    fontFamily: 'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, "Noto Sans", sans-serif',
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
