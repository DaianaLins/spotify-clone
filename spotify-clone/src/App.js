import React from 'react';
import Routes from "./routes/index";
import { GlobalProvider } from './hooks/GlobalContext';

export default function App() {
  
  return (
    <GlobalProvider >
      <Routes />
    </GlobalProvider>
  );
}