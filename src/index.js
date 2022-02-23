const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mainRoutes = require('./routes/main.routes');
const { PORT } = require('./config/config');

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(mainRoutes);

app.listen(app.get('port'), () => {
    console.log('Server is on port', app.get('port'));
});