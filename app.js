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

//import do arquivo de funções
const estadosCidades = require('./modulo/funcoes')

//EndPoint para retornar todos os estados                                     
app.get('/v1/estado-cidades/lista-siglas-estados', cors(), async function(request, response){ // cors() -> Permissões estão no CORS, como se eu 'chamasse' uma variavel

    //Chama função que retorna todos os estados
    let siglaEstados = estadosCidades.getListaDeEstados()

    //Resposta da API com o JSON e o status code
    if(siglaEstados){
        response.status(200)
        response.json(siglaEstados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um estado'})
    }
})

//EndPoint que retorna os dados filtrando pela sigla
app.get('/v1/estado-cidades/estado/:sigla', cors(), async function(request, response){
    //Recebe o conteudo da variavel sigla que será enviada na URL da requisição pelo modelo de parametro (params)
    let uf = request.params.sigla

    //Chama a função que vai receber a sigla e retornar os dados referente ao estado
    let dados = estadosCidades.getDadosEstado(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um estado'})
    }
})

//EndPoint que retorna a capital do estado filtrando pela sigla
app.get('/v1/estado-cidades/capital/estado', cors(), async function(request, response){
    //recebe a variavel sigla através do modelo query string -> quando precisarmos de mais requisições
    let uf = request.query.sigla
    let dados = estadosCidades.getCapitalEstado(uf)

    console.log(uf)
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um estado'})
    }
})

app.get('/v1/estado-cidades/regiao/regiao', cors(), async function(request, response){
    let regiao = request.query.regiao
    let dados = estadosCidades.getEstadoRegiao(regiao)
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um estado'})
    }
})

app.get('/v1/estado-cidade/capital-pais/capitais', cors(), async function(request,response){
    let capitais = request.params.capitais
    let dados = estadosCidades.getCapitalPais(capitais)
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um estado'})
    }
})

//Configurar portas, executa API e faz com que fique aguardando novas requisições
app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições ...')
})

