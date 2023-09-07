
const pessoal = {
    nome: "sergio",
    idade: 24,
    generoMusical: "tudo",
}
/*
console.log('O nome da pessoa é', $(pessoal.nome),'ela tem', $(pessoal.idade),'anos de idade e gosta', $(pessoal.generoMusical));
*

const donoDoPet = {
    nome: 'vitor hogo',
    pet: {
        nomeDoPet:'wanda',
        raca: 'vira-lata',
        idade: 1
    }
}

const curso = {
    nome: 'Notorno Frontend',
    linguagens:["js", "css", "html"]
}
console.log(curso.linguagens[0]);


const professores = [
    {nome:"Andrei", modulo: 1},
    {nome:"vitor", modulo: 2},
    {nome:"mina", modulo: 3},
]

console.log(professores[1].nome);

//notação de ponto:
curso.numeroDeEstudante = 50
/*notação de colchetes:
curso[numeroDeEstudante] = 50
console.log(curso.numeroDeEstudante);

const filme = {
    nome:'vingadores',
    direção:'tarantino',
    lançamento: 1855,
    elenco: ['ator', 'atriz', 'diretor'],
    jaVi: Boolean(true)
}


filme.perssonagens = ['tom','rosa','volante','café'];
console.log(filme.perssonagens);
console.log(filme.perssonagens[0].replaceAll('tom', 'xuxa'));

filme.perssonagem = ['tom','rosa','carneiro'];
console.log(filme.elenco[0] + "-> " + filme.perssonagem[0]);
console.log(filme.elenco[1] + "->" + filme.perssonagem[1]);
console.log(filme.elenco[2] + "->" + filme.perssonagem[2]);

filme.elenco[0] = 'xuxa'
console.log(filme);*/



const usuario = {
    nome: "prof",
    idade: 25,
    email: "prof@gmail.com",
    cidade: "São Paulo"
}
const novoUsuario = {
    ...usuario,
}    


usuario.comidas = ['lasanha', 'pizza', 'hamburguer'];
usuario.amigo = {
    ...usuario,
    nome:'Paulo',
    idade:26
}
console.log('O nome da pessoa é ', + usuario.nome, 'e suas comidas preferidas são ', + usuario.comidas,'e seu melhor amigo é ', + usuario.amigo.nome, 'ele tem ', + usuario.amigo.idade, 'anos.');
