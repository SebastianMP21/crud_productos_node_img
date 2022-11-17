const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
require('dotenv').config()
const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: '/tmp/',
    debug: true
})),


app.use(express.static('public'))

const productos = require('./routes/productos')
app.use(productos)

app.get('/', (req, res)=>{
    res.send('Soy Sebastian y esto es una prueba zzzz')
})

app.listen(3000, ()=>{
    console.log('¡Server corriendo :v! en http://localhost:3000')
 })