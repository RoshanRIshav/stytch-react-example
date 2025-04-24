import React from 'react';
import { StytchLogin } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs

Google Branding: Google's design style is modern, minimalistic, and user-friendly, utilizing a flat design approach with an emphasis on functionality and accessibility.
Brand Colors: Blue (#4285F4), Red (#DB4437), Yellow (#F4B400), Green (#0F9D58)
*/
const Login = () => {
  const styles = {
    container: {
      width: '100%',
      backgroundColor: '#fff', // White background
      color: '#202124',        // Main text color per Google
      borderRadius: '12px',
      boxShadow: '0 2px 16px rgba(66,133,244,0.08)', // Subtle shadow with blue tint
      padding: '2rem 1.25rem',
      margin: '2rem auto',
      maxWidth: 420,
      border: '1px solid #e0e0e0',
    },
    buttons: {
      primary: {
        background: `linear-gradient(90deg,#4285F4,#DB4437,#F4B400,#0F9D58)`, // Google Brand Colors
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 600,
        letterSpacing: '0.03em',
        boxShadow: 'none',
        transition: 'background .2s',
        cursor: 'pointer',
      },
    },
    colors: {
      primary: '#4285F4', // Google's Blue
      background: '#fff',
      text: '#202124',
      secondary: '#DB4437', // Google's Red as secondary
      border: '#e0e0e0',   // Google gray
    },
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
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
