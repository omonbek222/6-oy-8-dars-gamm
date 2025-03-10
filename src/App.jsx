import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from '../src/Components/Header';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
