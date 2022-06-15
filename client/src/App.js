import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState, useEffect} from 'react'




function App() {
    const [data, setData] = useState();

    useEffect(() => {
      async function fetchData () {
      let response = await fetch("/api")
      let data = await response.json()
      setData(data);
      } fetchData()
    }, []);
    
if(!data){
  return <div><h1>Nothing here {console.log(data)}</h1></div>
}
  
  return ( 
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
       
      
         <p>This is the data section: {data.items.measures[0].latestReading.value}</p>
         <p>The console.log = {console.dir("This is data items in p tag " + data.measures)}</p>
      
      
  
      </header>
    </div>

  );
}

export default App;
