const Store = require('./models/noodle')
const mongoose =require('mongoose')

// connection to local
const mongoURI = "mongodb://127.0.0.1:27017/"
const db = mongoose.connection

// connection to heroku
// const monogoURI = 'mongodb://'

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('database connected')
})

Noodle.create([
  {
    name:'Miso Ramen',
    restaurant: 'String2 -Aurora IL',
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
    name:'V041 Pho Tai, Gan',
    restaurant:'Pho Noodle Station -Aurora IL',
    description:'Vietnameses beef noodle soup, beef noodle soup with meat of your choice, topped with onion and cilantro in a rich beef stock with fresh rice noodles. Eye round steak slices, meatballs',
    img:'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/810a1d81-ae14-4e22-8d01-af6a71d57a89.172',
    price:'$13.95',
    rating:'4/5',
    review:'The quality of a pho bowl can be narrowed down to 2 things. The broth and the noodles. If one is off in anyway then the pho can only be considered average even if one of the 2 is supurb. In this case both the noodles and the broth complement each other nicely. The broth is not overy salty or rich which can be a problem, and the noodles have a very light texture that does not get soggy as time goes on.'
  },
  {
    name:'Udon Noodle Soup',
    restaurant:'Blue Spot Sushi -Chicago IL',
    description:'Freshly made handmade noodles, served with a seaweed stock. Toped with bamboo and scallions.',
    img:'https://www.recipezazz.com/media/photos/photos/5/0/1/6/7/quick-and-easy-udon-noodle-soup-50167_640x480_10794d8b.jpg',
    price:'$9',
    rating:'4/5',
    review:'A very good noodle dish on a cold day. The soup is very light yet rich in flavor, while the noodles are very firm and absorb the flavor of the seaweed soup. Can come topped with chicken for an extra dollar or tempura for and extra 2 dollars.'
  },
  {
    name:'Dan Dan Noodles',
    restaurant:"Xi'An Cuisine - Naperville IL",
    description:'Handmade noodles served with ground pork with sezchuan spicy sauce, and topped with fresh carrots, cucumbers, and lettuce. Hot and spicy',
    img:'https://www.cookingforkeeps.com/wp-content/uploads/2021/01/Spicy-Dan-Dan-Noodles-with-Chicken-2-1.jpg',
    price:'$14.50',
    rating:'3.5/5',
    review:"If you are looking for traditional authentic Asian cuisine then you have come to the right place. This dish which is very popular in Xi'An and Beijing is a very distinct and heavy flavor that is contributed by the szechuan sauce and pork. While the dish is very flavor full the noodles can be considered a little doughy and heavy which is the standard in the more northern areas of China."
  },
], (err, data)=>{
  console.log(data)
  db.close()
})
