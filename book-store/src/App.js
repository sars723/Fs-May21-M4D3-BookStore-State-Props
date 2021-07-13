
import './App.css';
import MyBadge from './components/MyBadge';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from './data/fantasy.json'
import SingleBook from './components/SingleBook';
import Warning from './components/Warning'
import BookList from './components/BookList';
import MyNavBar from './components/MyNavBar'
import {useState} from 'react'

function App() {
  const [query,setQuery]=useState("")
  return (
    <div className="App">
       <MyNavBar getQuery={query=>setQuery(query)} />
      <Warning msg="I am an alert" variant="success"/>
 <MyBadge color="success" text="i am a badge"/>

 <BookList books={fantasy} query={query} />
    </div>
  );
}

export default App;
