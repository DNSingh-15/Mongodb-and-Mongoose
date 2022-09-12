const { MongoClient } = require("mongodb")
// or
// const MongoClient = require("mongodb").MongoClient;


// Connection URL - we are giving the mongodb path because node doesn't know that where is mongodb
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function getData () {
    // Use connect method to connect to the server
    let result = await client.connect();

    let db = result.db('ecom')    // ecom - database name which i have create in mongodb compas

    let collection = db.collection('user')

    let response = await collection.find({}).toArray()
    console.log(response)      // it gives us all data and .toArray() gives data in structure format
}
getData()