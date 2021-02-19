import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

function baseStyle(props: Dict): Dict {
  return {
    p: 4,
    zIndex: 'tooltip',
    bgColor: mode('componentBg.light', 'componentBg.dark')(props),
    color: mode('text.light', 'text.dark')(props),
    fontSize: ['0.75em', '0.8em', '0.85em'],
    fontWeight: 'bold',
    borderRadius: 'base',
    boxShadow: 'none',
    w: '100%',
    maxW: '320px',
  };
}

export default {
  baseStyle,
};
