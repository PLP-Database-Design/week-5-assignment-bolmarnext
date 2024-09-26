// import our dependancies
const express = require('express')
const app = express()
const mysql = require('mysql2');
const dotenv = require('dotenv')
const ejs = require('ejs');

// configure environment variables
dotenv.config();


/* basic endpoint to say Hello World
app.get('', (req, res) => {
    res.send('Hello World!, Welcome to the World of Akinde Bolarinwa Michael!')
})
*/

// create a connection object
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// TEST THE CONNECTION
db.connect((err) => {
    // connection is not successful
    if (err) {
        console.log("Error connecting to the database: " , err)
    }

    // connection is successful
        console.log('Successfully connected to MySQL database: ', db.threadId)
    
})

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views',__dirname + './views');


//retrieve all patient
app.get('', (req, res) => {
    const getPaitents = 'SELECT first_name, last_name FROM patient'
    db.query(getPaitents, (err, result) => {
        // if there is an error
        if (err) {
           return res.status(400).send("Failed to retrieve patients", err)
        }
        //res.status(200).render('data', {data})
        res.status(200).send(data)
    })
})


//start and listen to the server
app.listen(3300, () => {
    console.log('Server is running on port 3300...')
})