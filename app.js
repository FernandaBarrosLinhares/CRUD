const express = require("express")

const app = express()
app.use(express.json())


app.get("/sobre", function (req, res){
    res.send("O aplicativo funciona")

})

app.get("/contato", function (req, res){
    res.send("Contato cadastrado com sucesso!")

})



app.listen(3000, function(){
    console.log("Servidor Rodando")
})