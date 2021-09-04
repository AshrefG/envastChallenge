const Ticket = require('../models/ticket');


exports.getAllTickets = (req, res) => {
  Ticket.find()
    .sort("-createdAt")
    .exec((err, tickets) => {
      if (err || !tickets) {
        return res.status(400).json({
          error: "Something went wrong in finding all todos",
        });
      }
      res.json(tickets);
    });
};

exports.getTicketById = (req, res, next, ticketId) => {
  Ticket.findById(ticketId).exec((err, ticket) => {
    if (err || !ticket) {
      return res.status(400).json({
        error: "404 todo not found",
      });
    }
    req.ticket = ticket;
  
    next();
  });
};

exports.createTicket = async(req, res) => {

  const ticket = new Ticket(req.body)

  ticket.save((err, result) => {
      if (err || !result) {
          return res.status(400).json({ error: "Something went wrong" });

      }
      return res.status(200).json({ 
        Success: true, 
        message: 'Ticket Created Successfully !',
        result })
  })

};

exports.updateTicket = (req, res) => {
  const ticket = req.ticket;
  ticket.category = req.body.category;
  ticket.description = req.body.description;
  ticket.subject = req.body.subject;
  ticket.save((err, ticket) => {
    if (err || !ticket) {
      return res.status(400).json({
        error: "something went wrong while updating",
      });
    }
    return res.status(200).json({
      ticket,
      message:  "Ticket Updated !"
    });
  });
};

exports.deleteTicket = (req,res) => {
  const ticket=req.ticket;
  ticket.deleteOne((err,task) => {
    if (err || !task) {
      return res.status(400).json({
        error: 'Something went wrong ! '
      });
    }
    return res.status(200).json({
        ticket: task,
        message:  "Ticket Deleted !"
    });
  });
};