// var app = require('../app');
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'



module.exports.ethindex = (req, res) => {
    res.render("ethlogin", 
    {
      title: "EthIndex"
    });
}

module.exports.energy = (req, res) => {
  res.render("energy", 
  {
    title: "Energy"
  });
}

module.exports.loginValidation = function(req, res){
  req.checkBody('email', 'Email is required.').notEmpty();
  // req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();

  var params = {
    username: req.body.username,
    password: req.body.password
  };

    mongo.connect(url, (err, client) => {
      if (err) {
        console.error(err)
        return
      }
      const db = client.db('Ether')
      const collection = db.collection('users')

      collection.findOne({username : params.username},(err, result) => {
        console.log(result);
        res.render("energy", 
        {
          title: "Energy",
          username: result.username,
          meter: result.meter,
          token: result.token,
          kilowatts: result.meterReading,
          rating: result.rating
        });
      })
    })

    // res.send("Validated");

  }

    