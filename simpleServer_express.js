const express = require('express');

const app = express();

const usersRouter = require('./routes/usersRouter')
const productsRouter = require('./routes/productsRouter')
const eventsRouter = require('./routes/EventsRouter')

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/events', eventsRouter);

/*
app.get('/', (req,res) => {
    res.send("Welcome to my node.js server!");
})

app.get('/about', (req,res) => {
    res.send("About...");
})

app.get('/contact', (req,res) => {
    res.send("contact.");
})

app.listen(3000,() => {
    console.log(`Server is running on http://localhost:3000`)
})

*/

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

