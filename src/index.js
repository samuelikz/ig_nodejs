// import express
const express = require('express'); 

// chamar função express
const app = express(); 

//Criar requisição
app.get('/courses', (request, response) =>{
    return response.json(["Curse 1", "Curse 2", "Curse 3","Curse 4"]);
})

app.post('/courses', (request, response) => {
    return response.json(["Curse 1", "Curse 2", "Curse 3","Curse 4"]);
})

app.put('courses/:id', (request, response) => {
    return response.json(["Curse 01", "Curse 2", "Curse 3","Curse 4"]);
})

app.patch('courses/:id', (request, response) => {
    return response.json(["Curse 01", "Curse 2", "Curse 3","Curse 04"]);
})

app.delete('courses/:id', (request, response) => {
    return response.json(["Curse 01", "Curse 2", "Curse 3"]);
})

// porta da aplicação
app.listen(3333);