import React from 'react';
import Routes from "./routes";
import { GlobalProvider } from './hooks/GlobalContext';

export default function App() {
  const token = localStorage.getItem("token")
  return (
    <GlobalProvider >
      <Routes />
    </GlobalProvider>
  );
}