import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

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

function imageVariant(props: Dict): Dict {
  return {
    color: mode('text.light', 'text.dark')(props),
    _hover: {
      opacity: '0.7',
      transition: 'all 0.3s ease-out',
    },
    _focus: {
      boxShadow: 'focus',
      borderRadius: 'base',
      transform: 'scale(1.04,1.04)',
    },
  };
}

const variants = {
  default: defaultVariant,
  image: imageVariant,
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
