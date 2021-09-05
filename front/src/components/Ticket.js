import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import ListTicket from './ListTicket';
class Ticket extends Component {
  state = {
    tickets: []
  }
  componentDidMount(){
    this.getTickets();
  }
  getTickets = async () => {
    await axios.get('http://localhost:8000/tickets/get_all')
      .then(res => {
        if(res.data){
          this.setState({tickets: res.data})
        }
      })
      .catch(err => console.log(err))
  }
  deleteTicket = (id) => {
    axios.delete(`http://localhost:8000/tickets/${id}`)
    .then(res => {
      if(res.data){
        this.getTickets()
      }
    })
    .catch(err => console.log(err));
 }
 updateTicket = (id) => {
    axios.p(`http://localhost:8000/tickets/${id}`)
    .then(res => {
      if(res.data){
        this.getTickets()
      }
    })
    .catch(err => console.log(err));
 }
render(){
  let { tickets } = this.state;
  
  return(
    <div>
      <h1>Tickets List</h1>
      <Input getTickets={this.getTickets}/>
      <ListTicket tickets={tickets} deleteTicket={this.deleteTicket} />
    </div>
    )
  }
}
export default Ticket;