import breakpoints from './breakpoints';
import colors from './colors';
import sizes from './sizes';
import radii from './radius';
import { spacing } from './spacing';
import typography from './typography';

const foundations = {
  breakpoints,
  colors,
  radii,
  sizes,
  space: spacing,
  ...typography,
};

export default foundations;
