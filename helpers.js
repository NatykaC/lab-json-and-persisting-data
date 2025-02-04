const fs = require("node:fs")

const path = "./data"
const fileName = "candles.json"

const collection = fs.readFileSync( `${path}/${fileName}`, {encoding: "utf-8"})

const resultOfTernary = collection ? JSON.parse(collection) : []

function readJSONFile(path, fileName){
    const collection = fs.readFileSync(`${path}/${fileName}`, {encoding: "utf-8"})
    return collection ? JSON.parse(collection) : []
}

function writeJSONFile(path, fileName, data){
    data = JSON.stringify(data)
    fs.writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"})
}


module.exports = {
    readJSONFile,
    writeJSONFile
}