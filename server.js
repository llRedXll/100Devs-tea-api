const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong':{
        'type': 'black',
        'origin': 'Yo mommas house',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeinated': true,
        'flavor': 'delicious'
    },
    'matcha':{
        'type': 'green',
        'origin': 'Yo mommas house',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeinated': false,
        'flavor': 'delicious'
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffeinated': false,
        'flavor': 'unknown'
    },
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res) => {
    const teaName = req.params.name.toLowerCase().trim()
    if (tea[teaName]){
        res.json(tea[teaName])
    } else {
        res.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! Better go catch it!` );
})