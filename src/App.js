import {React,Component} from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import {Navigationbar} from './components/Navigationbar';
import Booking from './components/Booking';
import OpenTickets from './components/OpenTickets';
import ClosedTickets from './components/ClosedTickets';
import Admin from './components/Admin';
import "./App.css";
class App extends Component{
  render()
  {
    return(
      <div className="App">
        <Navigationbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/booking" component={Booking}/>
            <Route exact path="/opentickets" component={OpenTickets}/>
            <Route exact path="/closedtickets" component={ClosedTickets}/>
            <Route exact path="/admin" component={Admin}/>
          </Switch>  
       </BrowserRouter>
      </div>
      
    );
  }


}

export default App;