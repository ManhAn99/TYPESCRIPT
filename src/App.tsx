import React,{useState} from 'react';
import './App.css';
import AddList from './components/AddList';
import List from './components/List';

//Typing State
export interface IState{
  people : {
    name : string
    age : number
    url : string
    note? : string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name : 'TONY STARK',
      url : 'https://br.atsit.in/vi/wp-content/uploads/2021/06/ro-ri-marvel-duong-nhu-xac-nhan-su-tro-lai-mcu-cua-tony-stark-trong-loat-phim-what-if-tony-stark.jpg',
      age : 24,
      note : 'IRON MAN'
    }
  ])

  return (
    <div className="App">
      <h1>Hello World</h1>
      <List people = {people} />
      <AddList people = {people} setPeople = {setPeople} />
    </div>
  );
}

export default App;
