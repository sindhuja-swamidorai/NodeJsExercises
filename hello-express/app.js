const express = require('express')
const app = express()

// Serve static files from the 'public' directory
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.get('/hello/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello, ${name}!`)
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
