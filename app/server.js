/**
 * Module dependencies.
 */

var express = require('express')
    , paypal = require('./routes/paypalRoute')
    , twilio = require('./routes/twilioRoute')
    , justgiving = require('./routes/justgivingRoute')
    , test = require('./routes/testRoute')
    , http = require('http')
    , path = require('path')
    , app = express()
    , server = require('http').createServer(app)

app.configure(function(){
    app.set('port', '3000');
    app.use(express.cookieParser());
    app.use(express.session({secret: '+p;jwD5%9][34y3|?r4th"8j8{R,y|'}));
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

app.post('/paypal', paypal.route);
app.get('/paypal/execute', paypal.executeRoute);
app.post('/twilio', twilio.route);
app.get('/justgiving', justgiving.route);
app.get('/test/:price/:description', test.route);

server.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});