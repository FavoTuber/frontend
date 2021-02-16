import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

const parts = ['button', 'list', 'item', 'divider'];

function headerVariant(props: Dict): Dict {
  return {
    button: {
      p: 1,
      mx: [8, 6],
      _focus: {
        boxShadow: 'focus',
        borderRadius: 'circle',
      },
    },
    list: {
      p: 0,
      zIndex: 1,
      boxShadow: 'none',
      borderRadius: 'base',
      bgColor: mode('bodyBg.light', 'bodyBg.dark')(props),
    },
    item: {
      p: 6,
      fontWeight: 'bold',
      _focus: {
        bgColor: mode('componentBg.light', 'componentBg.dark')(props),
      },
      _active: {
        bgColor: mode('componentBg.light', 'componentBg.dark')(props),
      },
    },
    divider: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'inherit',
      my: '0.5rem',
      opacity: 0.6,
    },
  };
}

const variants = {
  header: headerVariant,
};

export default {
  parts,
  variants,
};
