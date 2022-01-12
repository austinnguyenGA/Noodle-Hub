const Store = require('./models/noodle')
const mongoose =require('mongoose')

const mongoURI = "mongodb://127.0.0.1:27017/"
const db = mongoose.connection

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('database connected')
})

Noodle.create([
  {
    name:'Miso Ramen',
    restaurant: 'String',
    description:'Miso ramen with pork slices, seaweed, black wood ear mushroom, ajitama, and topped with green onions and scalions.',
    img: 'https://images.squarespace-cdn.com/content/v1/572e522f044262a7f8bb164f/1542234734762-AR8TR7HBLYYKVRLIDZ2I/%C2%A9DLMPD_Strings_062.jpg',
    price:'$14.95',
    rating:'4/5',
    review: 'A rich ramen broth that is not overly heavy that is nicely complimented by the juicy pork tendon slices and seaweed. I would highly recommend this to other ramen enthusiests.'
  },
  {
    name: 'Shrimp Alfredo',
    restaurant: 'Olive Garden',
    description:'Creamy, homemade fettuccine alfredo tossed with sautéed shrimp. ',
    img:'https://media.olivegarden.com/en_us/images/product/shrimp-alfredo-gv-590x365.png?_t=1',
    price:'$18.99',
    rating:'2/5',
    review:'With Olive Garden its always hit or miss. Sometimes the noodles are slightly burned sometimes the sauce is a bit to heavy or sometimes theres not enough. In general for this dish the sauce is to heavy and sometimes the shrimp and scallops that comes with this dish are over cooked. I would not recommend this dish the next time you go to your local Olive Garden.'
  },
  {
    name: 'Mostaccioli',
    restaurant:'Portillos',
    description:'Mostaccioli served with a choice between homemade marinara or meat sauce.',
    img:'https://www.portillos.com/assets/1/32/DimMenuItemLarge/mostacciolli-_-vodka-rigatoni.png?1306',
    price:'$9.95',
    rating:'3.5/5',
    review:'A very consistent satisfactory pasta noodle dish. It sometimes can be a little to oily but generally speaking if you want something quick and easy you can never go wrong with this pasta from Portillos.'
  },
  {
    name:,
    restaurant:,
    description:,
    img:,
    price:,
    rating:,
    review:
  },
  {
    name:,
    restaurant:,
    description:,
    img:,
    price:,
    rating:,
    review:
  },
  {
    name:,
    restaurant:,
    description:,
    img:,
    price:,
    rating:,
    review:
  },
  {
    name:,
    restaurant:,
    description:,
    img:,
    price:,
    rating:,
    review:
  },
  {
    name:,
    restaurant:,
    description:,
    img:,
    price:,
    rating:,
    review:
  },
  {
    name:,
    restaurant:,
    description:,
    img:,
    price:,
    rating:,
    review:
  },
  {
    name:,
    restaurant:,
    description:,
    img:,
    price:,
    rating:,
    review:
  },
], (err, data)=>{
  console.log(data)
  db.close()
})
