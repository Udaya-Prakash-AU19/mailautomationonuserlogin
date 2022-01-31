const express = require('express')
const router = express.Router()
// importing the controller functions using destructuring
const {
    createUser,
    createUsers,
    getUsers,
    getUser,
    getUserById,
    updateUserById,
    deleteUserById
} = require('../controllers/userController.js')


// routes for different operations
router.post('/create-user', createUser)
router.post('/create-users', createUsers)
router.get('/get-users', getUsers)
router.get('/get-user', getUser)
router.get('/get-user/:_id', getUserById)
router.put('/update-user/:_id', updateUserById)
router.delete('/delete-user/:_id', deleteUserById)


exports.router = router