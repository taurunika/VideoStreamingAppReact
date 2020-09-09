import React from 'react';
import './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom'
import VideoWatchPage from './VideoMain/VideoMain';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" component={ VideoWatchPage }/>
    </BrowserRouter>
    </div>
  );
}

export default App;
