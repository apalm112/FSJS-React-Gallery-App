/*	This code creates a special Node JS server that can serve minified/uglified JS. */
const express = require('express'),
	favicon = require('express-favicon'),
	path = require('path'),
	port = process.env.PORT || 8000,
	app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));

// the __dirname is the curent dir from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

/*app.get('/ping', function(req, res) {
	// '/ping' is a meaningless path you can use to test that the server is working.
	return res.send('This is a repsonse...');
});*/

app.get('/*', function (req, res) {
	// res.sendFile(path.join(__dirname, 'build', 'index.html'));
	res.sendFile('index.html', { root: path.join(__dirname, '../../../dist') });
});

app.listen(port);

console.log('Server is running app on port ' + port);
