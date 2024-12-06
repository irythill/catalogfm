// seed
const mongoose = require('mongoose')
const Band = require('./models/Band')
require('dotenv').config()

const seedBands = [
  {
      "name": "Deftones",
      "genre": "Alternative Metal",
      "year": 1988,
      "description": "Deftones is an American alternative metal band formed in Sacramento, California, in 1988. Known for blending metal, experimental rock, and shoegaze, their atmospheric and intense sound has made them pioneers in their genre. Albums like White Pony (2000) solidified their legacy with hits like 'Change (In the House of Flies).'",
      image: 'uploads/deftones.jpg'
  },
  {
      "name": "TWICE",
      "genre": "K-pop",
      "year": 2015,
      "description": "TWICE is a South Korean girl group formed by JYP Entertainment in 2015 through the reality show Sixteen. Known for their catchy melodies, synchronized choreography, and vibrant concepts, TWICE has become one of the most influential K-pop groups worldwide with hits like 'Cheer Up' and 'Fancy.'",
      image: 'uploads/twice.jpg'
  },
  {
      "name": "BK",
      "genre": "Hip-Hop/Rap",
      "year": 2010,
      "description": "BK is a Brazilian rapper and lyricist who emerged from the underground hip-hop scene in the 2010s. Known for his introspective lyrics and intricate storytelling, BK gained prominence with albums like 'Gigantes' (2018), solidifying his place as one of the leading voices in Brazilian rap.",
      image: 'uploads/bk.jpg'
  },
  {
      "name": "Fresno",
      "genre": "Emo Rock/Alternative Rock",
      "year": 1999,
      "description": "Fresno is a Brazilian emo rock band formed in Porto Alegre in 1999. Their emotionally charged lyrics and melodic sound have made them a staple in the Brazilian rock scene, with albums like 'Redenção' (2008) and 'Infinito' (2012) featuring iconic tracks such as 'Desde Quando Você Se Foi.'",
      image: 'uploads/fresno.jpg'
  },
  {
      "name": "Keshi",
      "genre": "Lo-fi/R&B",
      "year": 2017,
      "description": "Keshi is an American singer, songwriter, and producer who rose to prominence in the late 2010s with his blend of lo-fi beats, soulful R&B, and heartfelt lyrics. Known for tracks like 'blue' and 'right here,' Keshi's introspective style resonates with listeners worldwide.",
      image: 'uploads/keshi.jpg'
  },
  {
      "name": "Billie Eilish",
      "genre": "Alternative Pop",
      "year": 2015,
      "description": "Billie Eilish is an American singer-songwriter who gained international fame in 2015 with the release of 'Ocean Eyes.' Known for her haunting vocals and experimental production, her debut album 'When We All Fall Asleep, Where Do We Go?' (2019) earned critical acclaim and chart-topping hits like 'Bad Guy.'",
      image: 'uploads/billie.jpg'
  }
]


mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log('Connected!')
  await Band.deleteMany({})
  console.log('Deleting existing bands...')
  await Band.insertMany(seedBands)
  console.log('Inserting band seeds...')
  mongoose.connection.close()
    .catch(err => {
      console.error('Error inserting seeds', err)
      mongoose.connection.close()
    })
})