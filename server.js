var express = require('express');
var app = express();

// app.get('/', function(request, respond) {
//     respond.sendFile()
// })
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8080, function() {
    console.log('listening, speak my child');
});
