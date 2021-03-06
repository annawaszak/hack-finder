const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const passport = require('passport');

router.post('/signup', (req, res) => {
  const { email, username, password } = req.body;

  if (!password || password.length < 8) {
    return res.status(400).json({ message: 'Your password must be 8 char. min.' });
  }
  if (!email) {
    return res.status(400).json({ message: 'Your email cannot be empty' });
  }

  User.findOne({ email: email })
    .then((found) => {
      if (found) {
        return res.status(400).json({ message: 'This email is already taken' });
      }

      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      return User.create({ username, email, password: hash }).then((dbUser) => {
        req.login(dbUser, (err) => {
          if (err) {
            return res.status(500).json({ message: 'Error while attempting to login' });
          }
          res.json(dbUser);
        });
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/login', (req, res) => {
  console.log('STEP L3')
  passport.authenticate('local', (err, user) => {
    console.log('PASSPORT ERROR', err, 'PASSPORT USER', user)
    if (err) {
      return res.status(500).json({ message: 'Error while authenticating' });
    }
    if (!user) {
      return res.status(400).json({ message: 'Wrong credentials' });
    }
    req.login(user, (err) => {
      console.log(user);
      if (err) {
        return res.status(500).json({ message: 'Error while attempting to login' });
      }
      return res.json(user);
    });
  })(req, res);
});

router.delete('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Successful logout' });
});

// returns the logged in user
router.get('/loggedin', (req, res) => {
  res.json(req.user);
});

module.exports = router;
