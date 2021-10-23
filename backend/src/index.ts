import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import {
  FRONTEND_IP,
  FRONTEND_PORT,
  MONGO_DATABASE,
  MONGO_IP,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USERNAME,
  PORT,
} from "./config/config.js";
import { connect } from "mongoose";
const app = express();

const corsOptions = {
  origin: `${FRONTEND_IP}:${FRONTEND_PORT}`,
};

async function run(): Promise<void> {
  try {
    await connect(
      `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`
    );
  } catch (e) {
    console.log(e);
  }
}

run();

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
