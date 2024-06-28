const express = require('express');
const reviewsRouter = require('./reviewsRouter');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Getting all products");
})

router.put('/:productId', (req, res) => {
    res.send("Put request for product id " + req.params.productId);
})

router.get('/:productId', (req, res) => {
    res.send("Get request for product id " + req.params.productId );
})

router.post('/:productId', (req, res) => {
    res.send("POST request for product id " + req.params.productId);
})

router.delete('/:productId', (req, res) => {
    res.send("DELETE request for product id " + req.params.productId);
})

router.use('/:productId/reviews', reviewsRouter);

module.exports = router;