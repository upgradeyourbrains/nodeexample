const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())

app.get('/', function (req, res) {
    let rawdata = fs.readFileSync('counter.json')
    let dataelems = JSON.parse(rawdata)
    res.json(dataelems)

    console.log(dataelems)
    console.log(dataelems.counter)
    dataelems.counter++
    strData = `{
    "counter": ${dataelems.counter}
}`
    fs.writeFileSync('counter.json', strData)
})

app.listen(PORT, function () {
    console.log('Сервер начал работу на порте', PORT)
})