import React from 'react';
import { Grid, Box } from '@chakra-ui/react';
import { Video } from 'models/video';

import VideoCard from './Video';

const videos: Video[] = [
  {
    id: 'sqrsVsjfBRY',
    title:
      '【落書きメイキング】萌え萌え♡猫耳メイドな女の子描いてみた♡/イラスト【Procreate/CLIP STUDIO PAINT/Illustration making/デジタル】',
    thumbnailUrl: 'http://img.youtube.com/vi/sqrsVsjfBRY/maxresdefault.jpg',
  },
  {
    id: '6FPF-7d597U',
    title:
      '【イラストメイキング】ふわとろ厚塗りでバレンタインな女の子描いてみた♡【Procreate/Illustration making/デジタル】',
    thumbnailUrl: 'http://img.youtube.com/vi/6FPF-7d597U/maxresdefault.jpg',
  },
  {
    id: '0RhcdLFS3lY',
    title: '【大人買い】セブンのスーパマリオ一番くじ神引き!?【マリオ35周年】',
    thumbnailUrl: 'http://img.youtube.com/vi/0RhcdLFS3lY/maxresdefault.jpg',
  },
  {
    id: 'vXbLJqbyPqg',
    title:
      '【悲報】iPhone12シリーズ全種類プールに水没！全カラー開封レビュー！【iPhone 12 Pro】【ヒカキンTV】',
    thumbnailUrl: 'http://img.youtube.com/vi/vXbLJqbyPqg/maxresdefault.jpg',
  },
  {
    id: 'BNFyHOIX5pU',
    title: '必死に助けてアピールするマリオww【マリオメーカー2】',
    thumbnailUrl: 'http://img.youtube.com/vi/BNFyHOIX5pU/maxresdefault.jpg',
  },
  {
    id: 'ANp0qch3XVM',
    title: 'ダダダダ天使 / ナナヲアカリ',
    thumbnailUrl: 'http://img.youtube.com/vi/ANp0qch3XVM/maxresdefault.jpg',
  },
];

export default { title: 'Video Card' };

export const defaultStyle = (): JSX.Element => (
  <Grid
    w="full"
    templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)']}
    gap={[4, 4, 6, 6]}
  >
    {videos.map((video: Video) => (
      <Box key={video.id}>
        <VideoCard {...video} />
      </Box>
    ))}
  </Grid>
);
