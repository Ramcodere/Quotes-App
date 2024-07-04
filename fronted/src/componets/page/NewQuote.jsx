

import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewQuote() {
  let navigate = useNavigate();
  let usernameInputRef = useRef();
  let quoteInputRef = useRef();

  async function addQuotesHandler(e) {
    e.preventDefault();

    let author = usernameInputRef.current.value;
    let text = quoteInputRef.current.value;

    try {
      let res = await axios.post('http://localhost:8080/addquotes', {
        author,
        text,
      });
      navigate('/');
    } catch (e) {
      console.log('cannot create a quote');
    }
  }

  const containerStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    alignSelf: 'flex-start',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={addQuotesHandler} style={formStyle}>
        <div>
          <label htmlFor="naam" style={labelStyle}>
            Author:
          </label>
          <input type="text" placeholder="Author's Name" id="naam" ref={usernameInputRef} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="textt" style={labelStyle}>
            Quote:
          </label>
          <textarea id="textt" cols="30" rows="4" placeholder="Author's Quote" ref={quoteInputRef} style={inputStyle}></textarea>
        </div>
        <button style={{ ...buttonStyle, ':hover': buttonHoverStyle }}>Add Quote</button>
      </form>
    </div>
  );
}

export default NewQuote;
