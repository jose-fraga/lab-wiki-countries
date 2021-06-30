import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import countries from './countries.json';


function App() {


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList data={countries} />
          <Switch>
              <Route exact path='/:dynamicId' render={(props) => <CountryDetails data={countries} {...props} /> }/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
