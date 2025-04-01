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
        backgroundColor: '#4285F4', // Google Blue
        borderColor: '#4285F4',
        '&:hover': {
          backgroundColor: '#357ABD', // Darker blue for hover
        },
      },
    },
    colors: {
      primary: '#4285F4', // Google Blue
      background: '#FFFFFF', // White background for minimalist design
      text: '#202124', // Dark gray for text
      secondary: '#F4B400', // Google Yellow for accents
    },
    fontFamily: 'Roboto, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Ubuntu, Cantarell, "Noto Sans", sans-serif',
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