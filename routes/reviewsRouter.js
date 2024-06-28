const express = require('express');
const router = express.Router({mergeParams : true});

router.get('/', (req, res) => {
    res.send("Show all reviews")
})

router.get('/:reviewId', (req, res) => {
    res.send("Show review with id " + req.params.reviewId)
})

module.exports = router;