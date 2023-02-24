const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const authRouter = require("./routes/auth.js");
const itemRouter = require("./routes/items.js");
const ordersRouter = require("./routes/orders.js");

app.use(cors());
app.use(express.json());
app.use("/", authRouter);
app.use("/", itemRouter);
app.use("/", ordersRouter);

app.listen(port, () => console.log("Server running at " + port));
