// import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'


class App extends Component{
  constructor(){
    super();
    this.state ={
      monsters: [
        // {
        //   name: 'Linda'
        // },
        // {
        //   name: 'Frank'
        // },
        // {
        //   name: 'Jacky'
        // }
      ],
      searchField:'',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>this.setState(
        ()=>{
          return(
            {monsters: users}
          )
        },
        // ()=>{
        //   console.log(this.state)
        // }
      )
    )
  }

  onSearchChange = (event)=>{
          const searchField = event.target.value.toLowerCase();
          this.setState(()=>{
            return {searchField};
          })
      }

  render(){
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonster = monsters.filter((monster)=>{
            return monster.name.toLowerCase().includes(searchField);
          });
    return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      {/* <input 
        className="search-box" 
        type="search" 
        placeholder='search monsters' 
        onChange={onSearchChange}/> */}
        <SearchBox className = {'monsters-search-box'} onSearchBox ={onSearchChange} placeholder = {'search monsters'}/>
      {/* {filteredMonster.map((monster)=>{
        return(
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
          )
      })} */}
      <CardList monsters={filteredMonster}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
