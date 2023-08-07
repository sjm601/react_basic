import { useContext } from "react";
import { memberContext, themeContext } from "../ContextExampleApp2";

function Content() {
  const {isDark} = useContext(themeContext);
  const member = useContext(memberContext);
  return (
    <div className="content" 
    style={{
      backgroundColor: isDark ? 'black' : 'lightgray',
      color: isDark ? 'white' : 'black',
    }}>
      <p>{member}님, 행복한 하루 되세요...</p>
    </div>
  );
}

export default Content;