var express = require('express');
var bodyParser =  require('body-parser');

var app = express();
//app.use('/', express.static(__dirname + './'));


app.use(bodyParser.json()); // add a middleware (so that express can parse request.body's json)

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.post('/', function(req, res) {
	var jsonString = ''
	req.on('data', function (data) {
		jsonString += data;
	});

	req.on('end', function () {
		console.log(jsonString);
			
		function showJsonString(s) {
			var j = s.split('&');
			var ret = '';

			j.forEach(function(line) {
				var _l = line.split('=');
				ret += _l[0]+': '+_l[1]+'<br>'
			});

			return ret;                                                                                                         
		}
		
		res.send(showJsonString(jsonString));
	});
    //res.send('Hello World!')
    //res.redirect('http://www.google.com');
});

app.use(express.static('public'));

app.listen(8295, function() { console.log('listening 8295 ...'); });
