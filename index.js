const express = require('express')
const app = express()
// Leen el archivo de entorno, por defecto .env
process.loadEnvFile()
const path = require('path');

app.use(express.static(path.join(__dirname,process.env.WEBSITE_FOLDER)))

app.use((req,res,next)=>{
    // trackear las request
    // monitorear lo que va a la BD
    // revisar las cookies del usuario
    // parsear las requests que vengan en formato JSON
   console.log(`Log: ${req.method} ${req.url} - ${new Date()}`);
   next()
})

app.get('/hola', (req, res) => {
  res.send('<h2>Hello World!</h2>')
})

app.get('/nosotros', (req, res) => {
    res.send('<h2>Aqui tienes información sobre nuestra empresa!</h2>')
})

app.get('/cursos', (req, res) => {
    res.status(200).send('<h2>Aqui tienes información sobre todos los cursos!</h2>')
})

app.get('/json', (req, res) => {
    const respuestaJSON = {
        mensaje: 'Hola mundo desde express',
        fecha: new Date()
    }
    res.send(respuestaJSON)
})

app.use((req,res)=>{
    res.status(404).send('<h1> Error 404 - page not found </h1>')
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`app listening http://localhost:${process.env.PORT || 3000}`)
})