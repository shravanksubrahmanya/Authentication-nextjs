import { error } from "console";
import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose.connect(process.env.DATABASE_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Successfully connected with the Mongodb database");
    });

    connection.on("error", (error) => {
      console.log("Mongodb connection error: " + error);
      process.exit();
    });
  } catch (error) {
    console.log("Error during database connection with mongodb");
    console.log(error);
  }
}
