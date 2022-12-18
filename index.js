const express = require('express');
const bodyParser = require('body-parser');
const route = require('./src/routes/route.js');
const  mongoose  = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const url = "mongodb+srv://Ashish:v7Atywp9qYUwd7rR@test.ghtltbu.mongodb.net/test"

mongoose.connect(url, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
