import React from 'react'
import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <nav className='nav'>
    <h2> Main Quotes App</h2>
    <ul>
        <li>
            <Link to="/"> All Quotes </Link> 
 {/* <a></a> ancle Tad use karne se bar bar render hota hai to hum <Link></Link> use karte hai  */}
        </li>
        <li>
            <Link to="/new"> New Quote </Link>
        </li>
    </ul>
</nav>
);
    
}

export default MainNavigation;