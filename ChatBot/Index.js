'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
app.set('port', (process.env.PORT || 5858))
//Allow to process the data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json)
// register routes
app.get('/', function (req, res) {
res.send("hi this my first bot!!!")
})
// connect to facebook messenger

app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === "soumyap.mohanty")
	{
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong Token!!")
})
app.listen(app.get('port'), function () {
	console.log("running on port 5858")
})