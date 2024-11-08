import React from "react";
import ReactDOM from "react-dom/client";
/*  creating heading h1 tag using react*/
   



// const namesthe = "Hello, World!";
// const h = React.createElement("h1", { id: "first" }, namesthe);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h);


// const heading=React.createElement("div",{
//   id:"div1"
// },["i am div",
//     React.createElement("h1",{key:"h1"},"hero"),
//     React.createElement("h1",{key:"h2"},"superman")
// ]);
  


/*creating h1 tag using 
(jsx)=>react=>object=>htmlDOM  */
// this is called react element
// const heading=(
//   <div>
//     <h1 id="lol" key="one">tori ma</h1>
//     <h2 key="sec">godi me</h2>
//   </div>
// );


/* component compostion funtion component under another funtion component*/
// Define the Heading component
const Heading = () => (
  <div>
    <h1 id="lol" key="one">tori ma</h1>
    <h2 key="sec">godi me</h2>
  </div>
);

console.log("hello");

/* Creating a React function component */
const Heading2 = () => {
  return (
    <div>
      <Heading /> {/* Use the renamed component */}
      <h2> this is heading 2 using React function component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading2 />);
