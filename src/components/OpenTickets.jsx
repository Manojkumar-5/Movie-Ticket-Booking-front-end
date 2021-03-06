import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class OpenTickets extends Component {

  state={
    openseats:[]
  }

  componentDidMount(){
    axios.get('https://movie-ticket-booking-backend.herokuapp.com/ticket/status/open')
    .then(res => {
      const openseats=res.data;
      this.setState({openseats});
    })
  }

    render() {
        
      return (

              <div className="row">
              <div className="col-sm-2" />
              <div className="col-sm-8">
              <div className="card p-5 shadow">
              {this.state.openseats.map(open =>
              <div className="card p-1 shadow">
              <Button variant="secondary" size="lg">{open.seatnumber}
              </Button>
              </div>

              )}

          
        </div>
      </div>
      <div className="col-sm-2" />
    </div>
  );
};
            
}


export default OpenTickets;