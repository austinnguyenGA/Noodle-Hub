const express = require('express')
const bcrypt = require('bcrypt')

const User = require('../models/user')

const router = express.Router()

// Register Route

router.get('/register', (req, res) => {
  res.render('users/register.ejs')
})

router.post('/register', (req, res) => {
  const salt = bcrypt.genSaltSync(10)
  req.body.password = bcrypt.hashSync(req.body.password, salt)
  console.log(req.body)

  User.findOne({username: req.body.username}, (error, userExists) => {
    if(userExists) {
      res.send('that username is taken')
    } else {
      User.create(req.body, (error, createdUser) => {
        // res.send('user created')
        req.session.currentUser = createdUser
        res.redirect('/noodle')
      })
    }
  })
})

// Signin Route

router.get('/signin', (req, res) => {
  res.render('users/signin.ejs')
})

router.post('/signin', (req, res) => {
  User.findOne({ username: req.body.username }, (error, foundUser) => {
    if (foundUser) {
      const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
      if (validLogin) {
        req.session.currentUser = foundUser
        res.redirect('/noodle')
      } else {
        res.send('Invalid username or password')
      }
    } else {
        res.send('Invalid username or password')
    }
  })
})

// Signout Route

router.get('/signout', (req, res) => {
  req.session.destroy()
  res.redirect('/noodle')
})

module.exports = router
