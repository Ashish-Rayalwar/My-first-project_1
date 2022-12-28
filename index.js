const express = require('express');
const bodyParser = require('body-parser');
const route = require('./src/routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


try {
    mongoose.connect("mongodb+srv://Ashish:WeUTlaZDDXnrAyKM@test.ghtltbu.mongodb.net/test", {
    useNewUrlParser: true
    
})
console.log("database connected successfully");
} catch (error) {

    console.log(error.message," database is not connected");
}
// .then( () => console.log("MongoDb is connected"))
// .catch ( err => console.log(err) )


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
