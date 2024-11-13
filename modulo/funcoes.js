/*****************************************************************
 * Objetivo: Colocar em prática a manipulação de array e JSON.
 * Autor: Giovanna Coelho
 * Data: 09/10/2024
 * Versão: 1.0
******************************************************************/

var funcoes = require('./estados_cidades')

const getListaDeEstados = function(){
    let status = false
    let sigla = {}
    let listaSigla = []

    funcoes.listaDeEstados.estados.forEach(function(item){
        status = true
        listaSigla.push(item.sigla)
    })
    sigla.uf = listaSigla
    sigla.quantidade = listaSigla.length

    if(status == true){
        return sigla
    }else{
        return status
    }
}

// console.log(getListaDeEstados())


const getDadosEstado = function(siglaEstado){
    let status = false
    let filtroEstado = {}
    let sigla = String(siglaEstado).toUpperCase()

    funcoes.listaDeEstados.estados.forEach(function(item){
        if(String(item.sigla).toUpperCase() == sigla){
            status = true
            filtroEstado.uf = item.sigla
            filtroEstado.descricao = item.nome
            filtroEstado.capital = item.capital
            filtroEstado.regiao = item.regiao
        }
    })
    if(status == true){
        return filtroEstado
    }else{
        return status
    }
}

// console.log(getDadosEstado('sp'))

const getCapitalEstado = function(siglaEstado){
    let status = false
    let filtroEstado = {}
    let sigla = String(siglaEstado).toUpperCase()

    funcoes.listaDeEstados.estados.forEach(function(item){
        if(String(item.sigla).toUpperCase() == sigla){
            status = true
            filtroEstado.uf = item.sigla
            filtroEstado.descricao = item.nome
            filtroEstado.capital = item.capital
        }
    })
    if(status == true){
        return filtroEstado
    }else{
        return status
    }
}

// console.log(getCapitalEstado('rj'))

const getEstadoRegiao = function(regiaoEstado){
    let status = false
    let filtroRegiao = {}
    let regiao = String(regiaoEstado).toUpperCase()
    let sigla = []
    

    funcoes.listaDeEstados.estados.forEach(function(item){
        if(String(item.regiao).toUpperCase() == regiao){
            status = true
            let estado = {}
            filtroRegiao.regiao = item.regiao
            filtroRegiao.estados = sigla
            sigla.push(estado)
            estado.uf = item.sigla
            estado.descricao = item.nome

        }

    })
    if(status == true){
        return filtroRegiao
    }else{
        return status
    }
}

// console.log(getEstadoRegiao('sul'))

const getCapitalPais = function (){
    let status = false
    let paisCapitais = {}
    let capitais = []
    paisCapitais.capitais = capitais

    funcoes.listaDeEstados.estados.forEach(function(item){
        if (item.capital_pais != undefined){
            status = true
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
    if(status == true){
        return paisCapitais
    }else{
        return status
    }
}

// console.log(getCapitalPais())

const getCidades = function (regiaoEstado) {
    let status = false
    let filtroRegiao = {}
    let listaCidades = []
    let siglaRegiao = String(regiaoEstado).toUpperCase()

    funcoes.listaDeEstados.estados.forEach(function(item) {
        if (String(item.sigla).toUpperCase() === siglaRegiao) {
            status = true
            filtroRegiao.uf = item.sigla
            filtroRegiao.descricao = item.nome
            filtroRegiao.quantidade_cidades = item.cidades.length

            item.cidades.forEach(function(cidade) {
                listaCidades.push(cidade.nome)
                filtroRegiao.cidades = listaCidades 
            })
        }
    })
    if(status == true){
        return filtroRegiao
    }else{
        return status
    }
}

// console.log(getCidades('sp'))

module.exports = {
    getListaDeEstados, 
    getDadosEstado, 
    getCapitalEstado,
    getEstadoRegiao, 
    getCapitalPais, 
    getCidades
}