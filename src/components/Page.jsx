import React, { useContext } from 'react';
import Content from "./Content";
import Footer from "./Footer";
import Headder from "./Headder";
import { themeContext } from '../ContextExampleApp2';

function Page() {
  const theme = useContext(themeContext);
  return ( 
    <div className="page">
      <Headder />
      <Content />
      <Footer />
    </div>
  );
}

export default Page;