// =============================================================================
// Router set-up
// =============================================================================
var express = require('express');
var router = express.Router();

var app = express();

//* =============================================================================
//* app.get() tells Express how we want to handle HTTP GET requests to the 
//* /api/: name path.
//* The :name chunk in the path is called a named route parameter. When the API is hit, 
//* Express will grab that part of the URL and make it available in req.params.
//* =============================================================================
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
}); 

// Retrieve all todos 
app.get('/todos', function (req, res) {
    mc.query('SELECT * FROM tasks', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Todos list.' });
    });
});
