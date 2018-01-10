var mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://heroku_dc8ppc5g:5vrse0c1q01jsf49lkttt413fn@ds247587.mlab.com:47587/heroku_dc8ppc5g')

module.exports = {mongoose}