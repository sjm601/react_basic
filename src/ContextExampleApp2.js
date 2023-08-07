import { createContext, useContext, useState } from 'react';
import './App.css';
import Page from './components/Page';

export const themeContext =createContext(null);
export const memberContext =createContext(null);

function ContextExampleApp() {
  const [isDark, setIsDark] = useState(false);
  return (
    <memberContext.Provider value={"박상훈"}>
    <themeContext.Provider value={{isDark, setIsDark}}>
    <Page />
    </themeContext.Provider>
    </memberContext.Provider>
  );  
}

export default ContextExampleApp;
