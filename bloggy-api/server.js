const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./databases/db");
const BlogRouter = require("./routes/blog-routes");
const userRouter = require("./routes/user-routes");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.static("upload/images"));

app.use("/api/bloggy", BlogRouter);
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server up and running on Port ${PORT}`));
