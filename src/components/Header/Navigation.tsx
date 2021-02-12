import React from 'react';
import { useColorModeValue, Flex } from '@chakra-ui/react';

import Logo from './Logo';
import Menu from './Menu';

const HeaderNav: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py={{ base: 0, md: 5 }}
      px={{ base: 0, md: '5vw' }}
      bg="transparent"
      color={useColorModeValue('text.light', 'text.dark')}
    >
      <Logo />
      <Menu />
    </Flex>
  );
};

export default HeaderNav;
