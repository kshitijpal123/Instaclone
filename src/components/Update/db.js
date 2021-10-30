const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const path = require('path');

app.get('/express_backend', function(req, res){
    var options = {
        root: path.join(__dirname)
    };
     
    // var fileName = 'Update.js';
    res.sendFile(__dirname + '/Update.js')
        
});
 
app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});