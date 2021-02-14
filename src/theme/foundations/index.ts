import breakpoints from './breakpoints';
import colors from './colors';
import shadows from './shadows';
import sizes from './sizes';
import radii from './radius';
import { spacing } from './spacing';
import typography from './typography';

const foundations = {
  breakpoints,
  colors,
  shadows,
  sizes,
  radii,
  space: spacing,
  ...typography,
};

export default foundations;
