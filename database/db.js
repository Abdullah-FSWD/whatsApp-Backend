import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

export const Connection = async () => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-87rtmk5-shard-00-00.5dashsw.mongodb.net:27017,ac-87rtmk5-shard-00-01.5dashsw.mongodb.net:27017,ac-87rtmk5-shard-00-02.5dashsw.mongodb.net:27017/?ssl=true&replicaSet=atlas-4hkmm3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=whatsapp-clone`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("database connected successfully");
  } catch (err) {
    console.log("error connecting to", err);
  }
};
