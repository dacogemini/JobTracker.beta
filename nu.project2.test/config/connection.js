var mysql = require("mysql");

// =============================================================================
// mysql connection
// =============================================================================
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'JobCat_db'
})
mc.connect();

// Export connection for our ORM to use.
// module.exports = connection;