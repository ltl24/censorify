var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('weather.html', { root:  'public' });
});

// Route for the getcity REST service
router.get('/getcity', function(req, res) {
	console.log("In Getcity");
	console.log(req.query);
	var myRe = new RegExp("^" + req.query.q);
        console.log(myRe);
        fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
        if(err) throw err;
        var cities = data.toString().split("\n");
        var jsonresult = [];
	for(var i = 0; i < cities.length; i++) {
        	var result = cities[i].search(myRe);
          	if(result != -1) {
            		jsonresult.push({city:cities[i]});
			console.log(cities[i]);
            	}
	}
	res.status(200).json(jsonresult);
        });
});

router.get('/pokemon', function(req, res, next) {
  console.log("In Pokemon");
  res.send(pokemon);
});

router.post('/pokemon', function(req, res) {
    console.log("In Pokemon Post");
    console.log(req.body);
    pokemon.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;

var pokemon = [
  {
    name: 'Lugia',
    avatarUrl: 'http://vignette2.wikia.nocookie.net/pokemon/images/f/fd/Lugia_BW.gif/revision/latest?cb=20120622075411'
  },
  {
    name: 'Pikachu',
    avatarUrl: 'http://rs795.pbsrc.com/albums/yy232/PixKaruumi/Pokemon%20Pixels/Pikachu_Icon__free__by_Aminako.gif~c200'
  },
  {
    name: 'Charmander',
    avatarUrl: 'http://24.media.tumblr.com/tumblr_ma0tijLFPg1rfjowdo1_500.gif'

  },
  {
    name: 'Mew',
    avatarUrl: 'http://media3.giphy.com/media/J5JrPT8r1xGda/giphy.gif'
  },
  {
    name: 'Cubone',
    avatarUrl: 'http://rs1169.pbsrc.com/albums/r511/nthndo/tumblr_ljsx6dPMNm1qii50go1_400.gif~c200'
  },
  {
    name: 'Jigglypuff',
    avatarUrl: 'http://vignette2.wikia.nocookie.net/pokemon/images/9/9b/Jigglypuff_XY.gif/revision/latest?cb=20150201052351'
  },
  {
    name: 'Cleffa',
    avatarUrl: 'http://media1.giphy.com/media/pTh2K2xTJ1nag/giphy.gif'
  },
  {
    name: 'Gengar',
    avatarUrl: 'https://s-media-cache-ak0.pinimg.com/originals/7e/3b/67/7e3b67c53469cc4302035be70a7f2d60.gif'
  }
];
