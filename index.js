import React from "react";
import ReactDOM from "react-dom/client";
/* creating food web site*/; 
//creating title
const Title =()=>(
   <a href="/"> <img className="imag" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknMY26I44Bq3GbOf0fvb-xLJklgTL_hLUaA&s"/></a>
);
const Header=()=>{
  return (
    <div  className="header">
      <Title/>
      <div className="nav-item">
        <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
        <li>CART</li>
        </ul>
      </div>
     </div>
  );
};
const RestrauntList = [
  {
    name: 'Burger Haven',
    image: "https://imgs.search.brave.com/fcwjfVPtVoSoSv7rosKWrTd5GQ4fynaNlIAL6hkqb4E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL2dyaWxs/ZWQtZ291cm1ldC1i/dXJnZXItY2hlZXNl/LXRvbWF0by0yNjBu/dy0yNDY3NjY5MTQz/LmpwZw",
    rating: 4.5,
    verity:'veg'
  },
  {
    name: 'Pizza Palace',
    image: "https://media.istockphoto.com/id/645243318/photo/delicious-classic-italian-pizza-pepperoni-with-sausages-and-cheese-mozzarella.jpg?s=612x612&w=0&k=20&c=J3ZWNXmghZu-Wad1anCfplOnW0JoqK1zCD24fMmkt9o=",
    rating: 4.7
  },
  {
    name: 'Sushi Spot',
    image: "https://www.shutterstock.com/image-photo/vegan-sushi-tacos-plant-based-260nw-2138209333.jpg",
    rating: 4.3
  },
  {
    name: 'Taco Time',
    image: "https://imgs.search.brave.com/sometacoimage.png",
    rating: 4.6
  },
  {
    name: 'Pasta Place',
     image:"https://www.indianveggiedelight.com/wp-content/uploads/2019/11/creamy_avocado_pasta-3.jpg",
    rating: 4.4
  },
  {
    name: 'Steakhouse Supreme',
    image: "https://imgs.search.brave.com/somesteakimage.png",
    rating: 4.8
  },
  {
    name: 'Vegan Delight',
    image: "https://www.indianveggiedelight.com/wp-content/uploads/2019/11/creamy_avocado_pasta-3.jpg",
    rating: 4.5
  },
  {
    name: 'Ice Cream Corner',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTGySENoMKIiV--2xPuNrYntGTwO7s-7O2w&s",
    rating: 4.6
  },
  {
    name: 'Noodle Nirvana',
    image: "https://imgs.search.brave.com/somenoodleimage.png",
    rating: 4.7
  },
  {
    name: 'Sandwich Stop',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrv3BHCNUjERK5d3vgx1S5tsrZE3n7F22mg&s",
    rating: 4.2
  }
];

const RestrauntCard=({name,image,rating})=>{
    return (
      <div className="card">
        <img src={image}/>
         <h4>{name}</h4>
         <h5>{rating}</h5>
      </div>
    );
};
const Body=()=>{
  return (<div className="restrauntcard">
    {
      RestrauntList.map((restraunt)=>{
        return <RestrauntCard{...restraunt}/>;
      })
    }
  </div>); 
};
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
