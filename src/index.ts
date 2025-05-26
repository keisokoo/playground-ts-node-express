import cors from "cors";
import "dotenv/config";
import express from "express";
import playRouter from "./routes/play";

const app = express();
const port = 3080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
  res.send("Hello World!");
});
app.use("/play", playRouter);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
