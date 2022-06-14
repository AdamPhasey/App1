import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState, useEffect} from 'react'




function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData () {
      let response = await fetch("/api")
      let data = await response.json()
      setData(data.message);
      } fetchData()
    }, []);
    
if(!data){
  return <div><h1>Nothing here</h1></div>
}
  

  return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data}</p>
      </header>
    </div>

  );
}

export default App;
