const fs = require('fs');
const random = require('./random');

const randomJson = (jsonFiles, path) => {
    return JSON.parse(fs.readFileSync(`${path}/${jsonFiles[random.randomNumber(0, jsonFiles.length)]}`));
}

// choose a race
const racePath = './races';

const raceJsonFiles = fs.readdirSync(racePath);

const raceJson = randomJson(raceJsonFiles, racePath);

console.log(raceJson);

// choose a class

// determine ability scores

// describe character

// choose equipment

