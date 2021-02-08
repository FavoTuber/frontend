import React from 'react';
import { Grid } from '@chakra-ui/react';
import MovieCard from './Movie';

export default { title: 'Movie Card' };

//img.youtube.com/vi/xfC7gsONmaE/maxresdefault.jpg

const props = {
  thumbnailUrl: 'http://img.youtube.com/vi/xfC7gsONmaE/maxresdefault.jpg',
  title: 'このように長いタイトルをつけた場合、３行目からは省略されます。',
};

export const defaultStyle = (): JSX.Element => (
  <Grid
    w="full"
    templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)']}
    gap={[4, 4, 6, 6]}
  >
    <MovieCard title={props.title} thumbnailUrl={props.thumbnailUrl} />
    <MovieCard title={props.title} thumbnailUrl={props.thumbnailUrl} />
    <MovieCard title={props.title} thumbnailUrl={props.thumbnailUrl} />
    <MovieCard title={props.title} thumbnailUrl={props.thumbnailUrl} />
    <MovieCard title={props.title} thumbnailUrl={props.thumbnailUrl} />
    <MovieCard title={props.title} thumbnailUrl={props.thumbnailUrl} />
  </Grid>
);
