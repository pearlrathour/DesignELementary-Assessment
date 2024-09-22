if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const bodyParser = require('body-parser');
const cors= require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { PORT, DB_URL } = require('./config');

const User = require("./models/user");
const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");

const app = express();
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'DELETE'
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
app.use(cors(corsOpts));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sessionConfig = {
    secret: "Our Lil secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
};

app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect(process.env.DB_URL)
    .then(() => { console.log("Conn succ") })
    .catch((err) => console.log("No conn", err));


app.use("/", userRoutes);
app.use("/", taskRoutes);

app.listen(process.env.Port, function () {
    console.log("Server started on port 4000")
});