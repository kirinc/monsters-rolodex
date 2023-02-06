import React from 'react';
import {useState, useEffect} from 'react';

import './App.css'

// import SearchBox from './components/search-box/search-box.component'
import SearchBox from './components/search-box/search-box.function'
// import CardList from './components/card-list/card-list.component';
import CardList from './components/card-list/card-list.function';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    // const [filteredMonsters, setFilteredMonsters] = useState(monsters);
    // console.log(searchField);
    const [title, setTitle] = useState('Monsters Roldex');

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
    }, [])
    
    const onSearchChange = (event) =>{
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    const onTitleChange = (event) =>{
      const searchFieldString = event.target.value;
      setTitle(searchFieldString);
    }

    const filteredMonster = monsters.filter((monster)=>{
        return monster.name.toLowerCase().includes(searchField);
      });
      
  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox className = {'monsters-search-box'} onSearchBox ={onSearchChange} placeholder = {'search monsters'}/>
      <br />
      <SearchBox className ={'monster-search-box'} onSearchBox = {onTitleChange} placeholder = {'modify title'}/>
      <CardList monsters={filteredMonster}/>
    </div>
  )
}

export default App

