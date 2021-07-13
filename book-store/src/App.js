
import './App.css';
import MyBadge from './components/MyBadge';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from './data/fantasy.json'
import SingleBook from './components/SingleBook';
import Warning from './components/Warning'
import BookList from './components/BookList';
import MyNavBar from './components/MyNavBar'

function App() {
  return (
    <div className="App">
       <MyNavBar />
      <Warning msg="I am an alert" variant="success"/>
 <MyBadge color="success" text="i am a badge"/>

 <BookList books={fantasy}/>
    </div>
  );
}

export default App;
