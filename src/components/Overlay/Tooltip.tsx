import React from 'react';
import { Tooltip, AspectRatio, Box, Button, Icon } from '@chakra-ui/react';
import { BiInfoCircle } from 'react-icons/bi';

type Props = {
  text: string;
};

const HelpText: React.FC<Props> = ({ text }) => {
  return (
    <Tooltip label={text} aria-label={text} placement="bottom">
      <AspectRatio ratio={1}>
        <Box borderRadius="circle">
          <Button
            _hover={{
              bgColor: 'transparent',
            }}
          >
            <Icon as={BiInfoCircle} fontSize={['1em', '1.05em', '1.4em']} />
          </Button>
        </Box>
      </AspectRatio>
    </Tooltip>
  );
};

export default HelpText;
