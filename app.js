const express = require("express")

const app = express()

app.use(express.json());

//Exercicio 3 

const logHoraMiddleware = (req, res, next) => {
    const horaAtual = new Date().toISOString();
    console.log(
      `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
      );
    next(); 
  };

//Exercício 2


app.get("/sobre", logHoraMiddleware, (req, res) =>{
    res.send("O aplicativo funciona")

})

app.get("/contato", function (req, res){
    res.send("Contato cadastrado com sucesso!")

})


  //Exercicio 4 falta testar
    
    // const {id} = req.query
// se o paramentro esta presente
    // if(!id) {
    //     return res.status(400).json({
    //         error: "Id da query obrigatória : id"
    //     })
    // }
    // res.json({message:'Você pesquisou por: ${id}'})

    //Exercicio 5 falta testar

    app.get("/", function (req, res){
        res.sendFile(__dirname + "/public/index.html")
    
    })

    
//Configuração da porta (sempre no final)
app.listen(3000, function(){
    console.log("Servidor Rodando")
})