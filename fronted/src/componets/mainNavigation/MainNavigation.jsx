import React from 'react'
import { Link } from 'react-router-dom';
// import '../quotes/Quotes';


function MainNavigation() {
  return (
    <nav className='nav'>
    <h2> Quotes App</h2>
    <ul>
        <li>
            <Link to="/"> All Quotes </Link> 
 {/* <a></a> ancle Tag use karne se bar bar render hota hai to hum <Link></Link> use karte hai  */}
        </li>
        <li>
            <Link to="/new"> New Quote </Link>
        </li>
    </ul>
</nav>
);
    
}


export default MainNavigation;

