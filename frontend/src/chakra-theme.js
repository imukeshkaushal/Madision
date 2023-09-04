import { extendTheme } from '@chakra-ui/react';

// Importing the Oswald font
import 'typeface-oswald';

const theme = extendTheme({
  fonts: {
    heading: `'Oswald', sans-serif`,
    body: `'Oswald', sans-serif`,
  },
});

export default theme;
