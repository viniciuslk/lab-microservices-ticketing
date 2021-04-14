import { requireAuth, validateRequest } from "@vlk-ticketing/common";
import { body } from "express-validator";
import express, { Request, Response } from "express";
import { Ticket } from "../models";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ min: 0.01 })
      .withMessage("Price must be greather than 0"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    try {
      const { title, price } = req.body;

      const ticket = Ticket.build({
        title,
        price,
        userId: req.currentUser!.userId,
      });

      await ticket.save();

      res.status(201).send(ticket);
    } catch (err) {
      console.log(err);
    }
  }
);

export { router as createTicketRouter };
