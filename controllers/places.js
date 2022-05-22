const router = require('express').Router()
const places = require('../models/places.js')


router.get('/new', (req, res) => {
  console.log(req)
  res.render('places/new')
})
// GET /places
router.get('/', (req, res) => {       
     res.render('places/index', { places })
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  }
   else {
    res.render('places/show', { place: places[id], id })
  }
})


router.post('/', (req, res) => {
if (!req.body.pic) {
  req.body.pic = '/images/default-restaraunt-img.avif'
}
if (!req.body.city) {
  req.body.city = 'Anytown'
}
if (!req.body.state) {
  req.body.state = 'USA'
}
places.push(req.body)
res.redirect('/places')
})


//delete route
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


//edit route
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    console.log(places[id])
    res.render('places/edit', { place: places[id], id })
  }
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    console.log('errors is NaN')
      res.render('error404')
  }
  else if (!places[id]) {
    console.log('error is place not found')
      res.render('error404')
  }
  else {
    console.log('about to redirect')
      if (!req.body.pic) {

          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})






module.exports = router