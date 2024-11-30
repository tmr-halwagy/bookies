import logo from './logo.svg';
import './App.css';
import BookList from "./BookList";
import BookInfo from "./BookInfo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/*<BookList></BookList>*/}
      {/*  <BookInfo bookId="buc0AAAAMAAJ"></BookInfo>*/}

        <Router>
             <div className="App">

                <Routes>
                      Book List Route
                     <Route path="/" element={<BookList />} />
                     Book Detail Route
                     <Route path="/book/:bookId" element={<BookInfo />} />
                </Routes>
             </div>
        </Router>

    </div>
  );
}

export default App;A