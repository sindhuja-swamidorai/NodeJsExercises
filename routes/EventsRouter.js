const express = require('express');

const router = express.Router({mergeParams: true});

const events = [{ "id": 1, 'title': 'Test1',  'date': new Date()}]

router.get('/', (req, res) => {
    res.status(200).json(events);
})

router.get('/:eventId', (req, res) => {
    const data = events.find((e) => e.id === parseInt(req.params.eventId));
    if (data) {
    res.status(200).json(data);
    }
    else {
        res.status(404).send("Event not found");
    }
})

router.put('/:eventId', (req, res) => {
    const eventData = events.find((e) => e.id === parseInt(req.params.eventId));
    let status = 404;
    if (eventData) {
    status = 200;
    }
    else {
        status = 404;
    }

    req.on("data", data => {
        console.log("Data");
        console.log(data.toString());
            if (data) {
                const {title} = JSON.parse(data);
                eventData.title = title;
        }
    })

    req.on("end", data => {
        if(data) {
        console.log("Data");
        console.log(data.toString());
        }
        res.sendStatus(status);
    })
})


router.post('/', (req, res) => {
    let eventData = events.find((e) => e.id === parseInt(req.params.eventId));
    let status = 404;
    if (eventData) {
        status = 404;
    }
    else {
        eventData = {};
    }
    req.on("data", data => {
        console.log("Data");
        console.log(data.toString());
            //console.log(req);
            if (data) {
                const {title} = JSON.parse(data);
                console.log(title);
                eventData.id = events.length + 1;
                eventData.title = title;
                eventData.date = new Date();
                events.push(eventData);
                status = 201;
            }       
    })

    req.on("end", data => {
        if(data) {
        console.log("End Data");
        console.log(data.toString());
        }
        res.sendStatus(status);
    })
})


router.delete('/:eventId', (req, res) => {
    const eventIndex = events.findIndex((e) => e.id === parseInt(req.params.eventId));
    let status = 404;
    if (eventIndex) {
        status = 200;
        events.splice(eventIndex, 1);
    }
    else {
        status = 404;
    }

    res.sendStatus(status);
})

module.exports = router;
