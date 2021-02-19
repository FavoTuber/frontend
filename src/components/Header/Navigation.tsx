import React from 'react';
import { useColorModeValue, Flex } from '@chakra-ui/react';
import { useAuthenticate } from 'hooks/auth';

import Logo from './Logo';
import LoginButton from './LoginButton';
import DropdownMenu from './DropdownMenu';

const HeaderNav: React.FC = () => {
  const user = useAuthenticate();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      my={{ base: 6, md: 2 }}
      py={{ base: 0, md: 5 }}
      px={{ base: 0, md: '5vw' }}
      bg="transparent"
      color={useColorModeValue('text.light', 'text.dark')}
    >
      <Logo />
      {user === null ? <LoginButton /> : <DropdownMenu />}
    </Flex>
  );
};

export default HeaderNav;
