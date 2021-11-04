const input = process.argv.slice(2);
let url = "https://api.thecatapi.com/v1/breeds/search/?q=" + input;

const request = require('request');
request(url, (error, response, body) => {
  if (error) {
    return console.log(error);
  } else {
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      console.log(breed.description);
    } else {
      console.log("Error: The breed is not found!");
    }
  }
});