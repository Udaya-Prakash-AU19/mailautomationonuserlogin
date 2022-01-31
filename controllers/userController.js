const userModel = require('../model/userModel')

const nodemailer = require("../helpers/nodeMailer")

// controller function for user sign up
exports.createUser = async (req, res)=>{
    const body = req.body
    // to dynamically pass "to" and "username"
    nodemailer.mailOptions.to = body.email
    nodemailer.username = body.name

    try{
        const data = await userModel.create(body)

        await nodemailer.transporter.sendMail(nodemailer.mailOptions, function(error, info){
            if (error){
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response)
                res.status(200).send("The Page is viewed Successully")
            }
        });
    
        res.json({
            data: data,
            status: "Success"
        })
    } catch(error){
        res.json({
            data: "No data",
            status: "Failure"
        })
    }
}

// to create multiple users
exports.createUsers = async (req, res)=>{
    const body = req.body
    try{
        const data = await userModel.insertMany(body)
        res.json({
            data: data,
            status: "Success"
        })
    } catch(error){
        res.json({
            data: "No data",
            status: "Failure USERS"
        })        
    }
}

// to get list of all user details
exports.getUsers = async (req, res)=>{
    try{
        const data = await userModel.find()
        
        res.send({
            data: data,
            status: "Success"
        })
    } catch(error){
        res.send({
            data: error,
            status: "Failure"
        })
    }
}

// to get user based on any field
exports.getUser = async (req, res)=>{
    try{
        const body = req.body
        const data = await userModel.findOne(body)

        res.send({
            data: data,
            status: "Success"
        })
    } catch(error){
        res.send({
            data: error,
            status: "Failure"
        })
    }
}

// to get user by id
exports.getUserById = async (req, res)=>{
    try{
        const _id = req.params._id
        const data = await userModel.findById(_id)
        
        res.send({
            data: data,
            status: "Success"
        })
    } catch(error){
        res.send({
            data: error,
            status: "Failure"
        })
    }
}

// to update user details by id
exports.updateUserById = async (req, res)=>{
    try{
        const _id = req.params._id
        const name = req.body.name
        const data = await userModel.findByIdAndUpdate(_id, {"name": name})
        
        res.send({
            data: data,
            status: "Success"
        })
    } catch(error){
        res.send({
            data: error,
            status: "Failure"
        })
    }
}

// to delete user by id
exports.deleteUserById = async (req, res)=>{
    try{
        const _id = req.params._id
        const name = req.body.name
        const data = await userModel.findByIdAndRemove(_id)
        
        res.send({
            data: data,
            status: "Success"
        })
    } catch(error){
        res.send({
            data: error,
            status: "Failure"
        })
    }
}
