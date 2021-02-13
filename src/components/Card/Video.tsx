import React from 'react';
import { Link, Box, Image, Heading, AspectRatio } from '@chakra-ui/react';
import { Video } from 'models/video';

const VideoCard: React.FC<Video> = ({ id, thumbnailUrl, title }) => {
  return (
    <Box w="full" overflow="hidden">
      <Link href={'/video/' + id}>
        <AspectRatio ratio={16 / 9}>
          <Box>
            <Image w="100%" src={thumbnailUrl} alt={title} fallbackSrc="/image/noimg.svg" />
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
