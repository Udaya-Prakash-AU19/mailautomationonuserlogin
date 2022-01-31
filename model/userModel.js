const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    dept: {
        type: String,
        default: "IVS"
    }
})

const user = mongoose.model("user", userSchema)

module.exports = user
