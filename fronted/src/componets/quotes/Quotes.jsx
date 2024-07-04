import React from 'react';
import { useNavigate } from 'react-router-dom';

function Quotes(props) {
    let navigate = useNavigate();
    function showQuoteHandler(id) {
      navigate(`/quotes/${id}`);
    }
    
    // function Quotes(props) {
      return (
        <li>
        <span>
            <h1>Text: {props.text}</h1>
            <h3>Author: {props.author}</h3>
        </span>
        <button onClick={() => showQuoteHandler(props.id)} >View Full Quote</button>

    </li>
  );
}


export default Quotes;


