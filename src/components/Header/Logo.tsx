import React from 'react';
import { Image, Flex, Heading } from '@chakra-ui/react';

const Logo: React.FC = () => {
  return (
    <Flex align="center" mx={6} my={{ base: 2, md: 0 }} p={6}>
      <Image
        h="28px"
        src="/logo/icon.svg"
        fallbackSrc="/image/noimg.svg"
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
