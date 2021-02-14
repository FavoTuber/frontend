import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

const baseStyle = {
  mx: { base: 0, md: 2.5 },
  my: { base: 2.5, md: 0 },
  px: { base: 15, md: 6 },
  py: { base: 6, md: 4 },
};

const sizes = {};

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
