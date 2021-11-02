const express = require('express');
const compression = require('compression');
let app = express();
app.use(compression())
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());


//server endpoints



let port = process.env.PORT;
if (port == null || port == '') {
  port = 3030;
}
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});