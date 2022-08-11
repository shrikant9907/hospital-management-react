import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRouting } from './_config/AppRouting'; 
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {
            AppRouting && AppRouting.map((route, ridx) => {
              return <Route {...route} key={ridx} />
            })
          }
        </Routes>
      </Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}
export default App;