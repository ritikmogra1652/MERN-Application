import express from "express";
import cors from "cors";
import envConfig from "./config/envConfig";
import connectDB from "./database/db";
const app = express();
app.use(express.json());
const env = envConfig();
const port = env.port;
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.listen(port, () => {
  console.log("server is running on port http://localhost:" + port);
});
