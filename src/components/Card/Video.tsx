import React from 'react';
import { Link, Box, Image, Heading } from '@chakra-ui/react';
import { Video } from 'models/video';

const VideoCard: React.FC<Video> = ({ id, thumbnailUrl, title }) => {
  return (
    <Box w="full" overflow="hidden">
      <Link href={'/video/' + id}>
        <Box>
          <Image src={thumbnailUrl} alt={title} />
        </Box>
        <Box>
          <Heading size="card" noOfLines={2}>
            {title}
          </Heading>
        </Box>
      </Link>
    </Box>
  );
};

export default VideoCard;
