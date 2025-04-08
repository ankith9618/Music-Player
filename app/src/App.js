
import './App.css';
import Home from './Components/Home.js';


import {  SongProvider } from './Context/SongContext.js';

export default function App() {

  return (
    <SongProvider>
      <div className="App">
        <div className="filter"></div>
        <Home />
      </div>
    </SongProvider>
  );
}


