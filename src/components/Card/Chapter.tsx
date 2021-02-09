import React from 'react';
import { useColorModeValue, Box, Icon, Heading, Text } from '@chakra-ui/react';
import { FiClock } from 'react-icons/fi';

function convertTimeToText(time: number) {
  const h: number = (time - (time % (60 * 60))) / (60 * 60);
  const m: number = (time - ((time % 60) + h * 60 * 60)) / 60;
  const s: number = time % 60;
  return String(h) + ':' + ('0' + String(m)).slice(-2) + ':' + ('0' + String(s)).slice(-2);
}

type Props = {
  title: string;
  time: number;
};

const ChapterCard: React.FC<Props> = ({ title, time }) => {
  return (
    <Box
      p={4}
      w="full"
      overflow="hidden"
      bgColor={useColorModeValue('componentBg.light', 'componentBg.dark')}
      borderRadius="base"
    >
      <Box fontSize="0.7em" lineHeight={1.5}>
        <Text>
          <Icon as={FiClock} fontSize="1.2em" mr={2} />
          {convertTimeToText(time)}
        </Text>
      </Box>
      <Box>
        <Heading size="card" noOfLines={2}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export default ChapterCard;
