import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import FinalPage from './FinalPage';
import StartPage from './StartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </Router>
  );
}

export default App;