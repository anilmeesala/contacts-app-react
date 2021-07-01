import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {ContactManager} from "./contacts/ContactManager";

function App() {
  return (
    <Switch>
      <Route>
          <Route path="/" component={ContactManager}/>
      </Route>
    </Switch>
  );
}

export default App;
