import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import firebase from 'utils/Firebase';

const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const LoginButton: React.FC = () => {
  const fadeIn = keyframes`
  0% { opacity:0; }
  99% { opacity:0; }
  100% { opacity:1; }
`;

  return (
    <Box h="40px">
      <Button animation={`${fadeIn} ease-in 1.5s`} border="1px" onClick={login} p={1} h="36px">
        ログイン
      </Button>
    </Box>
  );
};

export default LoginButton;
