let pessoa ={
    primeiroNome : ' ',
    ultimoNome : ' ',

    get nome(){
        return this.primeiroNome+" "+ this.ultimoNome
    },

    set nome(n){
        this.primeiroNome=n
        this.ultimoNome= " "
    }    
}


pessoa.primeiroNome = 'Lucas';
pessoa.ultimoNome = 'Barbosa';
console.log(pessoa.nome);

pessoa.nome = 'Mariana'
console.log(pessoa.nome);