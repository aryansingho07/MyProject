import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";





const Footer=()=>{
  return (<h1>Footer</h1>); 
};

/*impotant  funtion component only return one jsx component jsx -one parent */
  //if you have add twom component you have to use a div and then inside you can use both
  // so you don not want use div you can use --react fragment -- this also a react component
  // it is like a emty tag
   //<react.fragment />==<></> write like this also}
  const AppLayout=()=>{
    return (
      <React.Fragment>
       
      <Header/>
      <Body/>
       <Footer/>
      </React.Fragment>
    );
  };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
