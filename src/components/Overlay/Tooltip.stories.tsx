import React from 'react';
import { Box } from '@chakra-ui/react';
import HelpText from './Tooltip';

export default { title: 'Tooltip' };

const props = {
  text:
    'アイウエオかきくけこアイウエオかきくけこアイウエオかきくけこアイウエオかきくけこアイウエオかきくけこ',
};

export const defaultStyle = (): JSX.Element => (
  <Box w="36px">
    <HelpText text={props.text} />
  </Box>
);
