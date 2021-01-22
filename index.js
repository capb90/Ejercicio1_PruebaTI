const express = require('express');
const router = require('./routes/api');
const { route } = require('./routes/api');
const app = express();
const bodyParser = require("body-parser")

app.use(express.json());


app.use(require('./routes/api'));


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});