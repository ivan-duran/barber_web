import { extendTheme } from '@chakra-ui/react';

// Define your custom color palette
const theme = extendTheme({
  colors: {
    brand: {
      500: '#761B19',  // You can name your color anything you like
    },
  },
});

export default theme;
