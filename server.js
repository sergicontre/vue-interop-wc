// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/src/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
