const express = require("express");
const router = express.Router();
const arr = ["ashish", "nimish"];
const movieList = [
  "Rang de basanti",
  "The shining",
  "Lord of the rings",
  "Batman begins",
];

const movieData = [
  {
    id: 1,
    name: "The Shining",
  },
  {
    id: 2,
    name: "Incendies",
  },
  {
    id: 3,
    name: "Rang de Basanti",
  },
  {
    id: 4,
    name: "Finding Nemo",
  },
];
console.log(movieData);

// router.get('/test-me', function (req, res) {
//     res.send('any dummy text')
// });

router.get("/movies", function (req, res) {
  res.send(`${movieList}`);
});

router.get("/movies/:movieIndex", (req, res) => {
  const { movieIndex } = req.params;
  if (movieIndex >= movieList.length) {
    res.send("error : not a valid index");
  }
  res.send(`${movieList[movieIndex]}`);
});

router.get("/films", (req, res) => {
  // res.send(
  //    movieData.map((item)=>{
  //     `<h1>${item.name}</h1><br>
  //     <h1>${item.id}</h1>
  //     `
  //    }).join(" ")
  // )
  let films = movieData.map((item) => {
    return `${item.id}: ${item.name}`;
  });
  res.send(films);
});

router.get("/films/:filmIndex", (req, res) => {
  const { filmIndex } = req.params;
  if (filmIndex >= movieData.length) {
    res.send(`No movie exists with this id 
            `);
  }
  res.send(movieData[filmIndex]);
});

module.exports = router;
