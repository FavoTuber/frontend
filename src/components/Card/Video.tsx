import React from 'react';
import { Link, Box, Img, Heading, AspectRatio } from '@chakra-ui/react';
import { Video } from 'models/video';

const VideoCard: React.FC<Video> = ({ id, thumbnailUrl, title }) => {
  return (
    <Box w="100%">
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Link href={'/video/' + id} variant="image">
            <Box>
              <Img
                src={thumbnailUrl}
                alt={`${title} のサムネイル画像`}
                borderRadius="base"
                pointerEvents="none"
                _selection={{ bgColor: 'transparent' }}
              />
            </Box>
          </Link>
        </AspectRatio>
      </Box>

      <Box>
        <Heading size="card" noOfLines={2}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export default VideoCard;
