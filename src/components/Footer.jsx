import { useContext } from "react";
import { themeContext } from "../ContextExampleApp2";

function Footer() {
  const {isDark, setIsDark} = useContext(themeContext)
  const toggleTheme = () => {
    setIsDark(!isDark);
  }
  return (
    <footer className="footer" 
    style={{
      backgroundColor: isDark ? 'black' : 'gray'
    }}>
      <button className="button" onClick={toggleTheme}>Dark Mode</button>
    </footer>
  );
}

export default Footer;