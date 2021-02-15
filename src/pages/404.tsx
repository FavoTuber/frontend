import React from 'react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';

const NotFound: React.FC = () => {
  return (
    <Container centerContent>
      <Box>
        <Heading fontSize={['4em', '5em', '6em']}>404</Heading>
      </Box>
      <Box>
        <Text>お探しのページは見つかりませんでした。</Text>
      </Box>
    </Container>
  );
};

export default NotFound;
