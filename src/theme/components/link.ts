import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, string | number>;

const baseStyle = {
  _hover: {
    textDecoration: 'none',
  },
};

const sizes = {
  default: {},
  list: {
    p: 8,
  },
};

function defaultVariant(props: Dict): Dict {
  return {
    color: mode('text.light', 'text.dark')(props),
    _hover: {
      bgColor: mode('componentBg.light', 'componentBg.dark')(props),
      borderRadius: 'base',
    },
    _focus: {
      boxShadow: 'none',
      bgColor: mode('componentBg.light', 'componentBg.dark')(props),
      borderRadius: 'base',
    },
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
