// Promise criação
const promessa = new Promise((resolve, reject) => {

    const nome = 'matheus'
    if (nome === 'matheus') {
        resolve('Matheus encontrado')
    } else {
        reject('Matheus não encontrado')
    }

})

promessa.then((data) => {
    console.log(data)
})
promessa.catch((err) => {
    console.log(err)
})
//Encadeamento de then's

const promessa1 = new Promise((resolve, reject) => {

    const nome = 'Natalia'
    if (nome === 'Natalia') {
        resolve('Natalia Encontrada')
    } else {
        reject('Natalia não encontrada')
    }

})

promessa1.then((data) => { // Passar o dado q quer para outro then tem q retornar
    return data.toLowerCase()
}).then((resultadomodificado) => {
    console.log(resultadomodificado) // Mudar nosso dado como quiser
})

// Catch

const promessa2 = new Promise((resolve, reject) => {

    const nome = 'Luana'
    if (nome === 'Tú') {
        resolve('Tú Encontrada')
    } else {
        reject('Tú não encontrada')  // Assim você trata o erro e exibe =, invês de dar um reject no console
    }

})

promessa2.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('ocorreu um erro:' + err)
})

// Várias promessas de uma vez só com all só quando todas forem resolvidas

const v1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1 operando em intervalo')
    }, 2000);
})

const v2 = new Promise((resolve, reject) => {
    resolve('2 operando')
})

const v3 = new Promise((resolve, reject) => {
    resolve('3 operando')
})

const resolveTudo = Promise.all([v1, v2, v3]).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Houve um erro: '+err)
})

console.log('depois') // É asicrono pq executa antes de todas as promessas, respostas imdiatas = mais rápido

// Várias promessas race

const v4 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve('4 operando em intervalo')
    }, 2000);
})

const v5 = new Promise((resolve, reject) => {
    resolve('5 operando')
})

const v6 = new Promise((resolve, reject) => {
    resolve('6 operando')
})

const resolveTudo2 = Promise.race([v4, v5, v6]).then((data) => { // É uma corrida o mais rapido chega e outros não  
    console.log(data)
}).catch((err) => {
    console.log('Houve um erro: '+err)
})

//Fetch request da API github
// Fetch API = lib requisoções asycronas === ajax
// Usando a API do github
const user = 'MatheusVict'
fetch(`https://api.github.com/users/${user}`, { // O objeto leva parametros para a requisição
    method: 'GET', // Url da api
    headers: {
        Accept: 'application/vnd.github.v3+json'
    },
}).then((res) => {
    console.log(typeof res)
    console.log(res)
    return res.json() // retorna resposta em json
}).then((data) => { // da pra pegar dados da api, muito mais fácil
     console.log(data) // pega tudo
    console.log(`O nome é: ${data.name}`) // igual as variaveis no html pegando coiss especificas
    console.log(`O login é: ${data.login}`)
    console.log(`Bio: ${data.bio}`)
}).catch((err) => {
    console.log('Erro: ' + err)
})
