const router = require('express').Router()


router.get('/new', (req, res) => {
  res.render('places/new')
})
// GET /places
router.get('/', (req, res) => { 
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: "/images/thai-food-img.avif"
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: "/images/coffee-cat-img.avif"
  }]       
     res.render('places/index', { places })
})

router.post('/', (req, res) => {
console.log(req.body)
res.send('POST /places')
})

module.exports = router