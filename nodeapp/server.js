/**
 * Module dependencies.
 */

var express = require('express')
    , paypal = require('./routes/paypalRoute')
    , twilio = require('./routes/twilioRoute')
    , http = require('http')
    , path = require('path')
    , MemStore = express.session.MemoryStore
    , app = express()
    , server = require('http').createServer(app)

app.configure(function(){
    app.set('port', '3000');
    app.use( express.cookieParser() );
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.session({secret: '+p;jwD5%9][34y3|?r4th"8j8{R,y|', store: MemStore({
        reapInterval: 60000 * 10
    })}));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

app.post('/paypal', paypal.paypalRoute);
app.post('/twilio', twilio.twilioRoute);
//app.get('/justgiving', justgiving.donate);

server.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});