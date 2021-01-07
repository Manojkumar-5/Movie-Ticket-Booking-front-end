import React, { Component } from 'react';
import "../App.css";
import {Jumbotron,Container}from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import logo from './logo.png';

export default class Home extends Component{
    render()
    {
        return(
            
                <div className="Home">
        <div className="lander">
        <img src={logo} alt="Logo" />;
         
          <form>
            <Button variant="btn btn-success">Welcome !</Button>
          </form>
        </div>
      </div>
            
        )
    }
}