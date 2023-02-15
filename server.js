const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const authRouter = require("./routes/auth.js");

app.use(cors());
app.use(express.json());
app.use("/", authRouter);

app.listen(port, () => console.log("Server running at " + port));
