import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function dbConnected() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("failed to connect", error);
  }
}
dbConnected();
