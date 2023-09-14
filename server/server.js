const express = require("express");
const dotenv = require("dotenv").config();
const passport = require("passport");
const session = require("express-session");
const passportSteam = require("passport-steam");
const SteamStrategy = passportSteam.Strategy;

const port = process.env.PORT || 5000;

const app = express();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new SteamStrategy(
    {
      returnURL: `${process.env.NODE_URL + port}/api/auth/steam/return`,
      realm: `${process.env.NODE_URL + port}/`,
      apiKey: process.env.API_KEY,
    },
    (identifier, profile, done) => {
      process.nextTick(function () {
        profile.identifier = identifier;
        return done(null, profile);
      });
    }
  )
);

app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 3600000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send(req.user);
});

app.get(
  "/api/auth/steam",
  passport.authenticate("steam", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

app.get(
  "/api/auth/steam/return",
  passport.authenticate("steam", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);
