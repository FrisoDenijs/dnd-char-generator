exports.randomNumber = (min, max) => {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

//based on https://softwareengineering.stackexchange.com/a/150618/171136
exports.randomWithWeight = (array) => {
    let cummulativeWeightArray = []
    let weightSum = 0;

    array.forEach(element => {
        weightSum += element.weight;
        cummulativeWeightArray.push({ "value": element.value, "weight": weightSum });
    });

    const randomSelector = randomNumber(0, weightSum);
    const arrEl = cummulativeWeightArray.find(e => e.weight > randomSelector);

    return arrEl.value;
}