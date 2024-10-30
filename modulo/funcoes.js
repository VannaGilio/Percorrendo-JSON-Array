/*****************************************************************
 * Objetivo: Colocar em prática a manipulação de array e JSON.
 * Autor: Giovanna Coelho
 * Data: 09/10/2024
 * Versão: 1.0
******************************************************************/

var funcoes = require('./estados_cidades')

const getListaDeEstados = function(){
    let sigla = {}
    let listaSigla = []

    funcoes.listaDeEstados.estados.forEach(function(item){
        listaSigla.push(item.sigla)
    })
    sigla.uf = listaSigla
    sigla.quantidade = listaSigla.length

    return sigla
}


const getDadosEstado = function(siglaEstado){
    let filtroEstado = {}
    let sigla = String(siglaEstado).toUpperCase()

    funcoes.listaDeEstados.estados.forEach(function(item){
        if(String(item.sigla).toUpperCase() == sigla){
            filtroEstado.uf = item.sigla
            filtroEstado.descricao = item.nome
            filtroEstado.capital = item.capital
            filtroEstado.regiao = item.regiao
        }
    })
    return filtroEstado
}

const getCapitalEstado = function(siglaEstado){
    let filtroEstado = {}
    let sigla = String(siglaEstado).toUpperCase()

    funcoes.listaDeEstados.estados.forEach(function(item){
        if(String(item.sigla).toUpperCase() == sigla){
            filtroEstado.uf = item.sigla
            filtroEstado.descricao = item.nome
            filtroEstado.capital = item.capital
        }
    })
    return filtroEstado
}

const getEstadoRegiao = function(regiaoEstado){
    let filtroRegiao = {}
    let regiao = String(regiaoEstado).toUpperCase()
    let sigla = []
    

    funcoes.listaDeEstados.estados.forEach(function(item){
        if(String(item.regiao).toUpperCase() == regiao){
            let estado = {}
            filtroRegiao.regiao = item.regiao
            filtroRegiao.estados = sigla
            sigla.push(estado)
            estado.uf = item.sigla
            estado.descricao = item.nome

        }

    })
    return filtroRegiao
}

const getCapitalPais = function (){
    let paisCapitais = {}
    let capitais = []
    paisCapitais.capitais = capitais

    funcoes.listaDeEstados.estados.forEach(function(item){
        if (item.capital_pais != undefined){
            let teste = {}
            teste.capital_atual = item.capital_pais.capital
            teste.uf = item.sigla
            teste.descricao = item.nome
            teste.capital = item.capital
            teste.regiao = item.regiao
            teste.capital_pais_ano_inicio = item.capital_pais.ano_inicio
            teste.capital_pais_ano_termino = item.capital_pais.ano_fim
            capitais.push(teste)
        }

    })
    return paisCapitais
}

const getCidades = function (regiaoEstado){
    let filtroRegiao = {}
    let regiao = String(regiaoEstado).toUpperCase()
    let listaCidade = []

    funcoes.listaDeEstados.estados.forEach(function(item){
        if(String(item.regiao).toUpperCase() == regiao){
            listaCidade.push(filtroRegiao)
            filtroRegiao.uf =
            filtroRegiao.descricao = item.nome
            listaCidade.quantidade_cidades = listaCidade.length
            listaCidade.cidades = item.nome
        }
    })
    return 
}

console.log(getCidades('sp'))