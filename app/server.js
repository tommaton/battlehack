var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , realtime = require('./routes/realtime')
    , http = require('http')
    , path = require('path')
    , MemStore = express.session.MemoryStore