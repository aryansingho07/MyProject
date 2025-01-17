import { image_title } from "../config.js" /*this is name import*/
  const Title =()=>(
    <a href="/"> <img className="imag" src={image_title}></img></a>
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
/*default import*/
 export default Header ;