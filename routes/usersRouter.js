const express = require('express')
const router = express.Router()
const postsRouter = require('./postsRouter')

// Route to get all users
router.get('/', (req, res) => {
    res.send('List of Users')
})

// Route to get a specific user
router.get('/:userId', (req, res) => {
    res.send(`Details of User ${req.params.userId}`)
})

/*
// GET users listing
router.get('/', (req, res) => {
    res.send('GET request for listing all users')
})

// POST request to add a new user
router.post('/', (req, res) => {
    res.send('POST request to add a new user')
})

// PUT request to update an existing user
router.put('/:id', (req, res) => {
    res.send(`PUT request to update user ${req.params.id}`)
})

// DELETE request to delete an existing user
router.delete('/:id', (req, res) => {
    res.send(`DELETE request to remove user ${req.params.id}`)
})
*/

router.use('/:userId/posts', postsRouter)

module.exports = router;
