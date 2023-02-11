const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const authRouter = require("./routes/auth.js");

const logger = require("morgan");
const passport = require("passport");
// const session = require("express-session");
// const SQLiteStore = require("connect-sqlite3")(session);
app.use(cors());
app.use(express.json());
app.use("/", authRouter);

app.listen(port, () => console.log("Server running at " + port));

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false,
//   store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
// }));
// app.use(passport.authenticate('session'));

// passport.serializeUser(function(user, cb) {
//     process.nextTick(function() {
//       cb(null, { id: user.id, username: user.username });
//     });
//   });

//   passport.deserializeUser(function(user, cb) {
//     process.nextTick(function() {
//       return cb(null, user);
//     });
//   });
