/***********************************************************************
 * Objetivo: API para retornar dados de estados e cidades do Brasil
 * Data: 30/10/2024
 * Autor: Giovanna
 * Versão: 1.0
 * //http://localhost:8080/v1/estados-cidades/lista-siglas-estados
***********************************************************************/

/*
    Para criar uma API devemos instalar:

    express - npm install express --save            (Serve para Criar a API)
    cors - npm install cors --save                  (Serve para as permissões da API)
    body-parser - npm install body-parser --save    (Serve para a API receber dados na requisição)
*/

//Importando Bibliotecas Instaladas
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {request} = require ('http')

//Inicia a utilização do express
const app = express ()

//response - Significa a resposta da API
//request - Significa a chegada de dados na API

//configuração do header -> quem poderá requisitar a API
app.use((request, response, next) =>{
    //Permissão de onde virão as requisições na API
    /*Acces... -> Origem da API*/  
    /* ,'' -> Quem pode acessar (IP, ou * -> todos)*/
    response.header('Access-Control-Allow-Origin', '*')
    
    //Permissão de quais metodos a API irá responder
    /* METODOS -> GET - Pegar dados da API || POST - Salvar dados na API || PUT - Alterar um dado API || DELETE = Deletar um dado na API */
    response.header('Access-Control-Allow-Methods', 'GET') 

    //Aplica as restrições no CORS da requisição
    app.use(cors())

    next()
})

//EndPoint para retornar todos os estados                                     
app.get('/v1/estados-cidades/lista-siglas-estados', cors(), async function(request, response){ // cors() -> Permissões estão no CORS, como se eu 'chamasse' uma variavel
    
    //import do arquivo de funções
    let estadosCidades = require('./modulo/funcoes')

    //Chama função que retorna todos os estados
    let siglaEstados = estadosCidades.getListaDeEstados()

    //Resposta da API com o JSON e o status code
    response.status(200)
    response.json(siglaEstados)
    
})

//Configurar portas, executa API e faz com que fique aguardando novas requisições
app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições ...')
})

