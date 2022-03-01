import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import SingleCocktail from './Pages/SingleCocktail';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path ='/' component = {Home}/>
        <Route exact path ='/about' component = {About}/>
        <Route exact path ='/cocktail/:id' component = {SingleCocktail}/>
        <Route exact path ='*' component = {Error}/>
      </Routes>
    </Router>
  );
}

export default App;
