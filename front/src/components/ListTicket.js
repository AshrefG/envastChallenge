import React from 'react';
const ListTicket = ({ tickets, deleteTicket, updateTicket }) => {
  return(
    <div>
      {
      tickets && tickets.length > 0 ? (
        tickets.map(ticket=>{return(
          <div>
            {/* <div key={ticket._id}>
              <h1>{ticket.subject} </h1>
              <h2>{ticket.category}</h2>
              <h3>{ticket.description}</h3>
              <button type="button" class="btn btn-primary" onClick={()=>deleteTicket(ticket._id)}>Delete</button>
            </div> */}
            <div className="card text-white bg-dark mb-3 d-grid gap-2 d-md-block">
              <div className="card-header">{ticket.subject}</div>
              <div className="card-body">
                <h5 className="card-title">{ticket.category}</h5>
                <p className="card-text">{ticket.description}</p>
                <button type="button" class="btn btn-success" onClick={()=>deleteTicket(ticket._id)}>Update</button>
                <button type="button" class="btn btn-danger" onClick={()=>deleteTicket(ticket._id)}>Delete</button>

              </div>
            </div>
          <br></br>
          </div>
        )})):(<li>No Ticket(s) left</li>)
      }
    </div>
  )
}
export default ListTicket