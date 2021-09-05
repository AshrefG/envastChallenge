import React, { Component } from 'react';
import axios from 'axios';
class Input extends Component {
  state = {
    subject: '',
    description: '',
    category: ''
  }
  addTicket = () => {
    const task = {subject: this.state.subject,
        description: this.state.description,
        category: this.state.category
    }
    if(task.subject && task.subject.length > 0){
      axios.post('http://localhost:8000/tickets/create', task)
        .then(res => {
           if(res.data){
             this.props.getTickets();
             this.setState({subject: ""})
           }
        })
        .catch(err => console.log(err))
    }else{
      console.log("Input field is required");
    }
  }
 handleChange = (e) => {
    this.setState({
        subject: e.target.value,
        category: e.target.value,
        description: e.target.value

    })
  }
  render(){
    let { category } = this.state.category;
    let { description } = this.state.description;
    let { subject } = this.state.subject;
      return(
        <div>
        <div className="form-group">
            <label>Subject</label>
            <input type="text" value={subject} onChange={this.handleChange} className="form-control" placeholder="Enter Subject" />
        </div>   
        <div className="form-group">
            <label>Category</label>
            <input type="text" value={category} onChange={this.handleChange} className="form-control" placeholder="Enter Category" />
        </div> 
        <div className="form-group">
            <label>Description</label>
            <input type="text" value={description} onChange={this.handleChange} className="form-control" placeholder="Enter Description" />
        </div>     
        <br></br>   
          <button type="button" className="btn btn-primary" onClick={this.addTicket}>Add Ticket</button>
          <br></br> 
          <br></br> 
        </div>
      )
    }
}
export default Input;