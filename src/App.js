import { Route, Routes } from 'react-router-dom';
import BooksList from "./pages/BooksList";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
    <GlobalStyles/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books' element={<BooksList/>}/> 
    </Routes>
    </>
  );
}

export default App;
