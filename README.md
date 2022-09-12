# Mongodb 👍
* MongoDB is an open source NoSQL database 
* Data store in the from if object
* MongoDB documents are similar to JSON objects 

## installation

```
sudo apt install mongodb
```
* check the status 
```
sudo systemctl status mongodb
```
* open mongodb shell
```
mongo
```

`or`

## `use mongodb compass`

1. Download MongoDB Compass
```
wget https://downloads.mongodb.com/compass/mongodb-compass_1.33.0_amd64.deb
```

2. Install MongoDB Compass
```
sudo dpkg -i mongodb-compass_1.33.0_amd64.deb
```

3. Start MongoDB Compass
```
mongodb-compass
```

### `some important commands`
```
1. use databaseName
2. show dbs
3. db.createCollection('coll.name')
4. db.collectionName.insertOne({  })
5. db.collectionName.insertMany({ },{ },{ })
6. db.collectionName.find()
7. db.collectionName.deleteOne({key:value})
8. db.collectionName.deleteMany({key:value},{key:value})
etc
```

### `Connect with Node.js `

* `install MongoDB NodeJS Driver`
```
npm i mongodb
```
### `use`
```
const { MongoClient } = require("mongodb")

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function getData () {
    
    let result = await client.connect();
    let db = result.db('ecom')   
    let collection = db.collection('user')

    let response = await collection.find({}).toArray()
    console.log(response) 
}
getData()
```


---------------------
---------------------

# mongoose 🥇
* Mongoose is a MongoDB object modeling tool 

* it is a advance form of mongodb

* we can define type using schema , we can connect to mongodb using Model


## installation

```
npm i mongoose
```

### use
```
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/ecom');

    const userSchema = new mongoose.Schema({
        name: String,
        price: Number
    });
    const userModel = mongoose.model('user', userSchema);
    
    let data = new userModel({name: 'anurag', price: 50})

    let result = await data.save();
    console.log(result)
}
main();
```

## methods 👍

### `connect with host`
```
mongoose.connect('mongodb://localhost:27017/dbName');
```


### `connect with mongoose`
```
const varName = mongoose.model('collectionName',SchemaName);
```


### `Schema`
```
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});
```


## important queries

### 1. `save`
```
let data = await new Product({
        name: "rohan",
        price: 200,
        brand: 'apple',
        category: 'Mobile'
});
console.log(data);
```


### 2. `update`
```
let data = await Product.updateOne(
        { name: "dataName" },
        {
            $set: { price: 700, name: 'max pro 6' }
        }
)
```

### 3. `delete`
```
let data = await Product.deleteOne({ name: 'dataName' })
```

### 4. `find`
```
 let data = await Product.find({ name: 'max pro 611' })
```

## API methods

### 1. `POST`
```
app.use(express.json());

app.post("/create", async (req, res) => {
    let data = await collectionName(req.body);
    res.send(result);
})
```

### 2. `GET`
```
app.get("/list", async (req, res) => {
    let data = await collectionName.find();
    res.send(data);
})
```

### 3. `delete`
```
app.delete("/delete/:id", async (req, res) => {
    let data = await collectionName.deleteOne(req.params);
    res.send(data);
})
```

### 4. `PUT`
```
app.put("/update/:_id", async (req, res) => {
    let data = await collectionName.updateOne(
        req.params, 
        { $set: req.body }
    );
    res.send(data);
})
```
