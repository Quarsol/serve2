const express = require('express')
const router = express.Router()
const query = require('../db/query.js')

router.get('/', (req, res, next) => {
  query.getInstructor()
  .then(serve2 => {
    return res.json({ data: serve2 })
  }).catch(next)
})

router.get('/:id', (req, res, next) => {
  query.getInstructorById(req.params.id)
  .then(serve2 => {
    if (serve2){
      return res.json({ data: serve2 })
    } else {
      return res.json({ error: 'Not found' })
    }
  }).catch(next)
})



module.exports = router
