 
const express = require('express');
const { createTicket, deleteTicket, getTicketById, getAllTickets, updateTicket } = require('../controllers/ticket');
const router = express.Router();

router.param("ticketId", getTicketById);

router.post('/create', createTicket);

router.delete("/:ticketId", deleteTicket);

router.get("/gettickets/", getAllTickets);

router.put("/:ticketId", updateTicket);


module.exports = router;