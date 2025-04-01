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
        backgroundColor: '#2D7FF9', // Modern blue color for primary actions
        borderColor: '#2D7FF9',
        '&:hover': {
          backgroundColor: '#1E6FE7', // Slightly darker blue for hover
        },
      },
    },
    colors: {
      primary: '#2D7FF9', // Modern blue as primary color
      background: '#171923', // Dark background for contrast
      text: '#FFFFFF', // White text for readability
    },
    fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', // Modern, clean typography
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