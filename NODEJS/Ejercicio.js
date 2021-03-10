function sieve(n){
    let numeros = new Uint8Array(n+1);
    let maximo = Math.floor(Math.sqrt(n));
    let primerNumero = 2;
    while(primerNumero <= maximo){
        for (let index = 2*primerNumero; index <= n; index+=primerNumero) {
            numeros[index] = 1;
        }
        while(numeros[++primerNumero])
        ;
    }
    while(numeros[n]){
        n--;
    }
    return n;
}
console.log(sieve(120));
