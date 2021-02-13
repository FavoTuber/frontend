import React from 'react';
import { Link, Box, Img, Heading, AspectRatio } from '@chakra-ui/react';
import { Video } from 'models/video';

const VideoCard: React.FC<Video> = ({ id, thumbnailUrl, title }) => {
  return (
    <Box w="full" overflow="hidden">
      <Link href={'/video/' + id}>
        <AspectRatio ratio={16 / 9}>
          <Box>
            <Img src={thumbnailUrl} alt={title} />
          </Box>
        </AspectRatio>
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
