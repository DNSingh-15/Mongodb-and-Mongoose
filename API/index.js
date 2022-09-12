const express = require('express')

// import the dbHost from config.js file
require('./config');

// import the model for using the schema from product.js file
const products = require('./product');

const app = express()


// for requesting data from body we have parse data
app.use(express.json());

app.post("/create", async (req, res) => {
    let data = products(req.body);
    const result = await data.save();
    res.send(result);
})


// get method
app.get("/list", async (req, res) => {
    let data = await products.find();
    res.send(data);
})


// delete method
app.delete("/delete/:id", async (req, res) => {
    console.log(req.params)
    let data = await products.deleteOne(req.params);
    res.send(data);
})


// put(update method)
app.put("/update/:_id", async (req, res) => {
    console.log(req.params)
    let data = await products.updateOne(
        // {name: "samsung m 40"},
        // {$set: {price: 350}}

        req.params,     // condition
        { $set: req.body }
    );
    res.send(data);
})


app.listen(5000, () => {
    console.log("server started on port 5000...");
})
