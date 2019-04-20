var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

var ethController = require('./controllers/EthController')
    
      app.use(expressValidator());
      app.use(bodyParser.urlencoded({extended : true}));
      app.use(logger('dev'));
      app.use(express.json());
      app.use(express.urlencoded({
        extended: false
        
      }));
      app.use(cookieParser());
      app.use(express.static(path.join(__dirname, 'public')));
      
      
      /* ===============================
      -   GETS
      ================================*/
      
      app.get("/ethlogin", ethController.ethindex);
      
      
      /* ===============================
      -   POSTS
      ================================*/
      
      app.post("/loginValidation", ethController.loginValidation);

      // view engine setup
      app.engine('hbs', hbs({
        extname: 'hbs',
        defaultLayout: 'layout',
        layoutsDir: __dirname + '/views/layouts'
      }));
      app.set('views', path.join(__dirname, 'views/layouts'));
      app.set('view engine', 'hbs');
      
      app.use(function (req, res, next) {
        next(createError(404));
      });
    
      app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        
        // render the error page
        res.status(err.status || 500);
        res.render('error');
      });
      
      module.exports = app;