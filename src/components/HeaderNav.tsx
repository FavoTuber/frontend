import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  Image,
  Flex,
  Box,
  Text,
  Link,
  Icon,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FiHome, FiMoon, FiSun } from 'react-icons/fi';
import { keyframes } from '@emotion/react';

const HeaderNav: React.FC = () => {
  const fadeIn = keyframes`
    0% { opacity:0; }
    100% { opacity:1; }
  `;
  const [showNav, setshowNav] = React.useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const toggleMenu = () => setshowNav(!showNav);

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
      <Flex align="center" mx={6} my={{ base: 2, md: 0 }} p={6}>
        <Image
          src="/logo/icon.svg"
          h="28px"
          pointerEvents="none"
          _selection={{ bgColor: 'transparent' }}
        />
        <Heading mx={2} size="headerNav" variant="headerNav">
          FavoTuber
        </Heading>
      </Flex>

      <Box mx={8} display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {showNav ? <CloseIcon w="1.5em" h="1em" /> : <HamburgerIcon w="1.5em" h="1.5em" />}
      </Box>

      <Box
        display={{ base: showNav ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
        bgColor={{
          base: useColorModeValue('componentBg.light', 'componentBg.dark'),
          md: 'transparent',
        }}
        animation={{ base: `${fadeIn} ease 0.6s`, md: 'none' }}
      >
        <Flex
          align="center"
          justify={['center', 'center', 'flex-end', 'flex-end']}
          direction={['column', 'column', 'row', 'row']}
          py={{ base: 4, md: 0 }}
        >
          <Link href="/" w={{ base: 'full', md: 'auto' }}>
            <Text
              mx={{ base: 0, md: 2.5 }}
              my={{ base: 2.5, md: 0 }}
              px={{ base: 15, md: 6 }}
              py={{ base: 6, md: 4 }}
              fontSize="default"
              fontWeight="bold"
              display="block"
            >
              <Icon as={FiHome} fontSize="1.2em" mr={3} />
              Home
            </Text>
          </Link>

          <Link href="#" onClick={toggleColorMode} w={{ base: 'full', md: 'auto' }}>
            <Text
              mx={{ base: 0, md: 2.5 }}
              my={{ base: 2.5, md: 0 }}
              px={{ base: 15, md: 6 }}
              py={{ base: 6, md: 4 }}
              fontSize="default"
              fontWeight="bold"
              display="block"
            >
              <Icon as={colorMode == 'light' ? FiMoon : FiSun} fontSize="1.2em" mr={3} />
              {colorMode == 'light' ? 'Dark' : 'Light'}
            </Text>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeaderNav;
