import express, { Request, Response } from "express";
import {Ticket} from "../models";
import {NotFoundError} from "@vlk-ticketing/common";

const router = express.Router()

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
    const ticket = await Ticket.findOne({_id: req.params.id})

    if(!ticket) {
        throw new NotFoundError()
    }

    res.send(ticket)
})

export { router as showTicketRouter }
