import './App.css';
import Header from './component/Header/Header';
import BookShelf from './component/BookShelf/BookShelf';
import Question from './component/Question/Question';

function App() {
  return (
    <div>
     <Header></Header>
     <BookShelf></BookShelf>
     <Question></Question>
    </div>
  );
}

export default App;
