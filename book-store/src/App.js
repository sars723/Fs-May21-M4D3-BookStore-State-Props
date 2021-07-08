
import './App.css';
import MyBadge from './components/MyBadge';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from './data/fantasy.json'
import SingleBook from './components/SingleBook';
import WarningSign from './components/WarningSign'
import BookList from './components/BookList';
import MyNavBar from './components/MyNavBar'

function App() {
  return (
    <div className="App">
       <MyNavBar />
      <WarningSign text="I am an alert"/>
 <MyBadge color="success" text="i am a badge"/>
 <SingleBook book={fantasy[0]}/>
 <BookList books={fantasy}/>
    </div>
  );
}

export default App;
