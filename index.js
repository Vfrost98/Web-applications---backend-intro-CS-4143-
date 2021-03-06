var fs = require('fs');
var data = [
  {
    animeName: 'Sailor Moon',
    rating: '9.5/10',
    genre: 'Magical girl',
    favoriteCharacter: 'Ami, Usagi, or Mamorou',
  },{
    animeName: 'Naruto',
    rating: '9.0/10',
    genre: 'Action/Adventure',
    favoriteCharacter: 'Itachi, Naruto, Shikamaru, or Temari'
  },{
    animeName: 'Dorohedoro',
    rating: '9.3/10',
    genre: 'Dark Fantasy/Sci-fi/Action',
    favoriteCharacter: 'Shin, Noi, Caiman'
  },{
    animeName: 'One piece',
    rating: '9.2/10',
    genre: 'Action/Adventure/Fantasy',
    favoriteCharacter: 'Luffy and Zolo'
  }, {
    animeName: 'Jojo\'s Bizarre Adventure',
    rating: '10/10',
    genre: 'Adventure, Fantasy, Supernatural',
    favoriteCharacter: 'Mista, Joskue, Bruno, Ceasar, Jotaro'
  }
]

fs.writeFile('animeList.json', JSON.stringify(data),(err) => {
  if(err)
    console.log(err)
  else 
    console.log('Write was successful! ... generating the list'); 
});

