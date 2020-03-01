import React from 'react';

import AppRouter from './src/AppRouter';

import {ThemeProvider} from './src/contexts/ThemeProvider';

const App: () => React$Node = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
