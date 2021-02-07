import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

const baseStyle = {};

const sizes = {};

function defaultVariant(props: Dict): Dict {
  return {
    color: mode('text.light', 'text.dark')(props),
  };
}

const variants = {
  default: defaultVariant,
};

const defaultProps = {
  variant: 'default',
  size: 'default',
};

export default {
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
