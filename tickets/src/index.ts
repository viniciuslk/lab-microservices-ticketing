import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET must be provided");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be provided");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connection successful with MongoDB.");
  } catch {
    console.error("Occurred an error.");
  }
};

app.listen(9000, () => {
  console.log("Listening at 9000");
});

start();
