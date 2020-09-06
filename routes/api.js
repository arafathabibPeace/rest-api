// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

/*  Second Example. */
const players = [
  { firstname: "eli", lastname: "manning", position: "qb", age: 37, team: "nyg" },
  { firstname: "tom", lastname: "braddy", position: "qb", age: 41, team: "nep" },
  { firstname: "jj", lastname: "watt", position: "de", age: 41, team: "hou" }
]
const teams = [
  { name: "giants", city: "new york", conference: "nfc" },
  { name: "patriots", city: "new england", conference: "afc" },
  { name: "giants", city: "houston", conference: "afc" }
]

router.get('/players', (req, res) => {
  res.json({
    confirmation: 'success',
    data: players,
  });
})

router.get('/teams', (req, res) => {
  res.json({
    confirmation: 'success',
    data: teams,
  });
})

/*  First Example. */
/*
router.get('/:resource', (req, res) => {
  res.json({
    confirmation: 'success',
    resource: req.params.resource,
    query: req.query // from the url query string
  })
})

router.get('/:resource/:id', (req, res) => {
  res.json({
    confirmation: 'success',
    resource: req.params.resource,
    id: req.params.id,
    query: req.query // from the url query string
  })
})
*/
module.exports = router

