import React from 'react';
import { StytchLogin } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch
This update applies Google's branding: clean, flat, primary colors (blue, red, yellow, green), and liberal use of white.
*/
const Login = () => {
  const styles = {
    container: {
      width: '100%',
      backgroundColor: '#FFFFFF', // Google's main background
      color: '#202124', // Google main text color
      borderRadius: '8px',
      boxShadow: '0 1px 8px rgba(60,64,67,0.08)',
      padding: '2.5rem 1.5rem',
      margin: '2.5rem auto',
      maxWidth: 420,
      fontFamily:
        'Roboto, Arial, sans-serif',
    },
    buttons: {
      primary: {
        backgroundColor: '#4285F4', // Google Blue
        color: '#FFFFFF',
        borderColor: '#4285F4',
        borderRadius: '4px',
        fontWeight: 500,
        fontFamily: 'Roboto, Arial, sans-serif',
        letterSpacing: '0.01em',
        boxShadow: 'none',
        padding: '10px 0',
        marginBottom: '10px',
        transition: 'background .2s',
        '&:hover': {
          backgroundColor: '#3367D6',
          color: '#FFFFFF',
        },
      },
      // Variant/demo for alternate (Google colors)
      googleRed: {
        backgroundColor: '#EA4335',
        color: '#FFFFFF',
      },
      googleYellow: {
        backgroundColor: '#FBBC05',
        color: '#202124',
      },
      googleGreen: {
        backgroundColor: '#34A853',
        color: '#FFFFFF',
      },
    },
    colors: {
      primary: '#4285F4',
      background: '#FFFFFF',
      text: '#202124',
      secondary: '#F0F0F0',
      border: '#C4C4C4',
      brandRed: '#EA4335',
      brandYellow: '#FBBC05',
      brandGreen: '#34A853',
    },
    fontFamily: 'Roboto, Arial, sans-serif',
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
