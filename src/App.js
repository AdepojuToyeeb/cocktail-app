import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import SingleCocktail from './Pages/SingleCocktail';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path = "/" element = {<Home />}/>
        <Route exact path ="/about" element = {<About />}/>
        <Route exact path ='/cocktail/:id' element = {<SingleCocktail />}/>
        <Route exact path ='*' element = {<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
