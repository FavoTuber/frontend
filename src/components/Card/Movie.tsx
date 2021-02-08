import React from 'react';
import { Link, Box, Image, Heading } from '@chakra-ui/react';

type Props = {
  linkUrl: string;
  thumbnailUrl: string;
  title: string;
};

const MovieCard: React.FC<Props> = ({ linkUrl, thumbnailUrl, title }) => {
  return (
    <Box w="full" overflow="hidden">
      <Link href={linkUrl}>
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

export default MovieCard;
