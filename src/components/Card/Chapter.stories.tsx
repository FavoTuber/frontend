import React from 'react';
import { Grid } from '@chakra-ui/react';
import ChapterCard from './Chapter';

export default { title: 'Chapter Card' };

//img.youtube.com/vi/xfC7gsONmaE/maxresdefault.jpg

const props = {
  title: 'このように長いタイトルをつけた場合、３行目からは省略されます。',
  time: 3600,
};

export const defaultStyle = (): JSX.Element => (
  <Grid
    w="full"
    templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
    gap={[4, 4, 6, 6]}
  >
    <ChapterCard title={props.title} time={props.time} />
    <ChapterCard title={props.title} time={props.time} />
    <ChapterCard title={props.title} time={props.time} />
    <ChapterCard title={props.title} time={props.time} />
    <ChapterCard title={props.title} time={props.time} />
    <ChapterCard title={props.title} time={props.time} />
    <ChapterCard title={props.title} time={props.time} />
    <ChapterCard title={props.title} time={props.time} />
  </Grid>
);
