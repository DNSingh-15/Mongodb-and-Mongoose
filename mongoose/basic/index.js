const mongoose = require('mongoose');

async function main() {
    // connect with host
    await mongoose.connect('mongodb://localhost:27017/product');

    const userSchema = new mongoose.Schema({
        name: String,
        price: Number
    });
    const userModel = mongoose.model('user', userSchema);
    
    // connect with Database
    let data = new userModel({name: 'anurag', price: 50})

    let result = await data.save();
    console.log(result)
}
main();