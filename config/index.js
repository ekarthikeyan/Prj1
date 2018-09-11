let configValues = require('./config'); // it will look for the config.js or config.json by default
module.exports = {

        getDbConnectionString: function() {

            return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@dbh42.mlab.com:27427/nodetodosample';
        }
}
