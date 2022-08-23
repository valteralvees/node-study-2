const express = require('express');
const app = express();
const User = require('./models/User')

app.use(express.json());

const db = require('./models/db');


app.get("/", async(req,res) => {
    res.send("Página Inicial")
});

app.post("/cadastrar", async(req,res) =>{
    console.log(req.body)

    await User.create(req.body)
    .then(()=>{
        return res.json({
            erro: false,
            mensagem: "Usuário Cadastrado com sucesso"
        })
    }).catch(() =>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso"
        })
    })
    //res.send("Página cadastrar------")
    //Criação de model

});


app.listen(8080,() => {
    console.log(" servidor iniciado na porta 8080.")
});
