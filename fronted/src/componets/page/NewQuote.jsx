

import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function NewQuote() {
  let navigate = useNavigate();
  let usernameInputRef = useRef();
  let quoteInputRef = useRef();
  

  //react is single page application
  async function addQuotesHandler(e) { 
  // aise karne se page refress hote hai to ye nhi krna chaiye usko thik karne ke sabse phele liye >>

   e.preventDefault();    
   //Aisa kane se page refress ni hota hai

  let author = usernameInputRef.current.value;
  let text = quoteInputRef.current.value;

  try{
   let res = await axios.post('http://localhost:8080/addquotes', {
    author,
    text,
  });
   //navigate matlb '/' bale route ko hit ya tick karo
   navigate('/');


  }
  catch(e){
    console.log("cannot crete a quote")
  }

  }

  return (
    <div>
      <form onSubmit={addQuotesHandler}>
        <div>
          <label htmlFor='naam'>Author: </label>
          <input type='text' placeholder="Author's Name" id='naam' ref={ usernameInputRef} /> 
        </div>
        <div>
          <label htmlFor='textt'>Quote: </label>
          <textarea id='textt' cols="30" rows="4" placeholder="Author's Quote" ref={ quoteInputRef} ></textarea>

        </div>
           <button>Add Quote</button>
        
      </form>
    </div>
  )
}

export default NewQuote;
