import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
  url: `mongodb://${USERNAME}:${PASSWORD}@ac-87rtmk5-shard-00-00.5dashsw.mongodb.net:27017,ac-87rtmk5-shard-00-01.5dashsw.mongodb.net:27017,ac-87rtmk5-shard-00-02.5dashsw.mongodb.net:27017/?ssl=true&replicaSet=atlas-4hkmm3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=whatsapp-clone`,
  oprions: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) == -1) {
      return `${Date.now()} - file - ${file.originalName}`;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()} - file - ${file.originalName}`,
    };
  },
});

export default multer({ storage });
