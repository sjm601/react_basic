import { useContext } from "react";
import { memberContext, themeContext } from "../ContextExampleApp2";

function Headder() {
  const {isDark} = useContext(themeContext);
  const member = useContext(memberContext);
  return (
    <header className="header" 
    style={{
      backgroundColor: isDark ? 'black' : 'gray',
      color: isDark ? 'white' : 'black',
    }}>
      <h1>환영합니다. {member}님!</h1>
    </header>
  );
}

export default Headder;