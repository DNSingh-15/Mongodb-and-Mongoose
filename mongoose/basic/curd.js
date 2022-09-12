
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/product');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "rohan",
        price: 200,
        brand: 'apple',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}
saveInDB()


const updateInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne(
        { name: "max 100" },
        {
            $set: { price: 700, name: 'max pro 6' }
        }
    )
    console.log(data)
}
// updateInDB()


const deleteInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({ name: 'max pro 6' })
    console.log(data);
}
// deleteInDB()


const findInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({ name: 'max pro 611' })
    console.log(data);
}
// findInDB();
