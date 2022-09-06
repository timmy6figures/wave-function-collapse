// Express server
const express = require('express');
const { readFile } = require('fs').promises;
const app = express();


// WFC
var wfc = require('wavefunctioncollapse');

const imgData = readFile('./tile.png');
// var imgData = ImageData(image) // let's pretend this is an ImageData retrieved from a canvas context in the browser

var model = new wfc.OverlappingModel(imgData.data, imgData.width, imgData.height, 3, 48, 48, true, true, 4);





app.get('/', async (request, response) =>{

    console.log("Just got a request");
    response.send(await readFile('./home.html', 'utf8'));
        

});


app.listen(process.env.PORT || 3000, () => console.log("App available"));