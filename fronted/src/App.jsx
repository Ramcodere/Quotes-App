import React from 'react';
import MainNavigation from './componets/mainNavigation/MainNavigation';
import {Route, Routes } from 'react-router-dom';
import AllQuotes from './componets/page/AllQuotes';
import NewQuote from './componets/page/NewQuote';
import ShowQuotes from './componets/page/ShowQuotes';


function App() {
  return (
    <React.Fragment>
   <MainNavigation/>
     <Routes>
      <Route path="/" element={<AllQuotes />}/>
      <Route path="/new" element={<NewQuote />}/>
      <Route path="/quotes/:id" element={<ShowQuotes />}/>


     </Routes>
    </React.Fragment>
  );
}

export default App;