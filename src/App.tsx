import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Pipes } from './components/Pipes';
import { ThemeProvider } from './theme/ThemeProvider';

function App() {
  
  return (
    <ThemeProvider>
      <Header />
      <Pipes/>
    </ThemeProvider>
  );
}

export default App;
