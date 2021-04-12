import React, { useState } from "react";
import './App.css';
import CategoryBox from './CategoryBox';

function App() {
  var apiUrl = "https://api.chucknorris.io/jokes/random";
  const [types,setType] = useState([]);
  const [category, setCategory] = useState("");
  const [joke,setJoke] = useState({});
  const [newJoke, setNewJoke] = useState('');

  React.useEffect(() =>{
    fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then(data => setType(data));
  }, []);

  React.useEffect(() =>{
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => setJoke(data));
  }, [category]);
  apiUrl=apiUrl+"?category="+category;

  function OnChange(newCategory){
    setCategory(newCategory);
  }
  function CreateType(type){
    return(
      <CategoryBox type={type} onChange={OnChange}/>
    )
  }

  function NewJoke(){
    
    setNewJoke(category);
    setCategory("");
    setCategory(newJoke);
  }


  return (
    <div className="App">
      <header className="App-header">
      <h1>Chuck Norris Jokes Generator</h1>
      </header>
      <div className="Category-type">
        <h2>Select a Category</h2>
        {types.map(CreateType)}
      </div>
      <div className="Category-jokes">
        <h3 className="joke-heading">Selected Category: {category}</h3>
        <p className="joke">{joke.value}</p>
        <button className="new-joke" onClick={NewJoke}>New Joke</button>
        
      </div>
      <p>Double click to select a category</p>
    </div>
  );
}

export default App;
