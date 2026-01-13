import express from "express";
import morgan from "morgan";
import bookRoutes from "./routes/book.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Book Management API is running");
});

app.use("/books", bookRoutes);
app.use(errorHandler);

export default app;
