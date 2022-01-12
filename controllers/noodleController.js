const express = require('express')

const router = express.Router()

const Noodle = require('../models/noodle')

// INDEX

router.get('/', (req, res) => {
  Noodle.find({}, (err, allNoodle) => {
    res.render('index.ejs', {
      noodle: allNoodle
    })
  })
})
// NEW

router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// DELETE

router.delete('/:id', (req, res) => {
  Noodle.findByIdAndDelete(req.params.id, (err, deletedNoodle) => {
    if(err) {
      console.log(error)
      res.send(error)
    } else {
      console.log(deletedNoodle)
      res.redirect('/noodle')
    }
  })
})

// UPDATE

router.put('/:id', (req, res) => {
  Noodle.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (error, updatedNoodle) => {
      if (error) {
        console.log(error)
        res.send(error)
      } else {
        console.log(updatedNoodle)
        res.redirect('/noodle')
      }
    }
  )
})

// CREATE

router.post('/', (req, res) => {
  if(req.body.recommend === "on") {
    req.body.recommend = true
  } else {
    req.body.recommend = false
  }
  Noodle.create(req.body, (error, createdNoodle) => {
    if(error){
      console.log(error)
      res.send(error)
    } else {
      res.redirect('/noodle')
    }
  })
})

// EDIT

router.put('/:id/edit', (req,res) => {
  Noodle.findById(req.params.id, (error, foundNoodle) => {
    if(error) {
      console.log(error)
      res.send(error)
    } else {
      res.render('edit.ejs', {
        noodle: foundNoodle
      })
    }
  })
})

// SHOW

router.get('/:id', (req, res) => {
  Noodle.findById(req.params,id, (error, foundNoodle) => {
    console.log(foundNoodle)
    res.render('show.ejs', {noodle: foundNoodle})
  })
})

module.exports = router
