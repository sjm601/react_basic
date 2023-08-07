import { useState } from 'react';
import './App.css';
import Page from './components/Page';
function ContextExampleApp() {
  const [isDark, setIsDark] = useState(false); 
  return (
    <Page isDark={isDark} setIsDark={setIsDark} />
  );
}

export default ContextExampleApp;
