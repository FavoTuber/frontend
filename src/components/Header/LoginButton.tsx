import React from 'react';
import { Button } from '@chakra-ui/react';

const LoginButton: React.FC = () => {
  return (
    <Button border="1px" onClick={() => alert('ハゲ')}>
      ログイン
    </Button>
  );
};

export default LoginButton;
