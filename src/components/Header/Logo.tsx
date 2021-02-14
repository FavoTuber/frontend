import React from 'react';
import { Img, Flex, Heading } from '@chakra-ui/react';

const Logo: React.FC = () => {
  return (
    <Flex align="center" mx={6} my={{ base: 2, md: 0 }} p={6}>
      <Img
        boxSize="28px"
        src="/logo/icon.svg"
        pointerEvents="none"
        _selection={{ bgColor: 'transparent' }}
      />
      <Heading size="headerNav" variant="headerNav">
        FavoTuber
      </Heading>
    </Flex>
  );
};

export default Logo;
