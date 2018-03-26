// =============================================================================
// Router set-up / Require
// =============================================================================
var express = require('express');
var router = express.Router();
var app = express();
// Import the model (job.js) to use its database functions.
var Job = require('../models/jobs.js');

// =============================================================================
// Routes
// =============================================================================

// Default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

// Retrieve full list 
app.get('/list', function (req, res) {
    mc.query('SELECT * FROM JobCat_db', function (error, results, fields) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: 'Jobs list: '
        });

    })
});


module.exports = router;

