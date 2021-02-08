import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

const baseStyle = {};

const sizes = {
  headerNav: {
    px: '5px',
    fontSize: '1em',
    lineHeight: 'none',
  },
  title: {
    my: 8,
    fontSize: ['heading.default', 'heading.default', 'heading.medium'],
  },
  section: {
    my: 8,
    fontSize: ['heading.smaller', 'heading.small', 'heading.small'],
  },
  card: {
    my: 4,
    fontSize: ['0.85em', '0.9em', '1.0em', '1.1em'],
  },
};

function defaultVariant(props: Dict): Dict {
  return {
    color: mode('heading.light', 'heading.dark')(props),
  };
}

const variants = {
  default: defaultVariant,
  headerNav: {
    color: 'pink',
  },
};

const defaultProps = {
  variant: 'default',
  size: 'title',
};

export default {
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
