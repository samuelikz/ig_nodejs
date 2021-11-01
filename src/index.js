// import express
const express = require('express'); 

// chamar função express
const app = express(); 

//Criar requisição
app.get('/', (request, response) =>{
    return response.json({message: "Hello World Ignite!"})
})

// porta da aplicação
app.listen(3333);