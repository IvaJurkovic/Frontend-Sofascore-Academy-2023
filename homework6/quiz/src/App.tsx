import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home';
import Questions from './questions';
import WinningScreen from './winningScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/congratulations" element={<WinningScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
