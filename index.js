const express = require("express")

const app = express()

let users = [];

app.use(express.json());

    
app.get('/', (req, res) => {
    res.json("Sucesso!");
});


    // Rota para obter todas as pessoas
app.get('/users', (req, res) => { 
        res.json(users);
    });
    
    // Rota para obter uma pessoa por ID
    app.get('/users/:id', (req, res) => {
        const { id } = req.params;
        const user = users.find(user => user.id === parseInt(id));
        if (!user) {
            res.status(404).send('User not foud');
            return;
        }
        res.json(user);
    });
    
    app.post('/users', (req, res) => {
        const user = req.body;
        user.id = user.length > 0 ? users[users.length - 1].id + 1 : 1;
        users.push(user);
        res.status(201).send('User added successfully.');
    });
    
    // Rota para atualizar uma pessoa por ID
    app.put('/users/:id', (req, res) => {
        const { id } = req.params;
        const newData = req.body;
        const index = users.findIndex(user => user.id === parseInt(id));
        if (index === -1) {
            res.status(404).send('User not found.');
            return;
        }
        users[index] = { ...users[index], ...newData };
        res.status(200).send('User added successfully.');
    });
    
    // Rota para deletar uma pessoa por ID
    app.delete('/users:id', (req, res) => {
        const { id } = req.params;
        const index = users.findIndex(user => user.id === parseInt(id));
        if (index === -1) {
            res.status(404).send('User not found.');
            return;
        }
        users.splice(index, 1);
        res.status(200).send('Usuario deletado com sucesso.');
    });

    //Configuração da porta (sempre no final)
app.listen(3005, function(){
    console.log("Servidor CRUD Rodando")
})