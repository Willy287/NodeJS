/*
Lo que no conozco:
No conozco mucho de promesas ni funciones flechas
No entiendo la diferencia entre un for await y un for normal*
Lo que conozco:
Inicializar variables
Declarar clases
*/

/*
Claase que hereda de la clase Map
*/
class DefaultMap extends Map{

    constructor(defaultValue){
        super();
        this.defaultValue = defaultValue;
    }   

    get(key){
        if(this.has(key)){
            return super.get(key);
        }
        else{
            return this.defaultValue;
        }
    }
}

class Histograma{
    constructor(){
        this.letterCounts = new DefaultMap(0);
        this.totalLetters  = 0;
    }
    add(text){
        text=text.replace(/\s/g,"").toUpperCase();
        for(let character of text){
            let count  = this.letterCounts.get(character);
            this.letterCounts.set(character,count+1);
            this.totalLetters++;
        }
    }
    
    toString(){
        let entries =[...this.letterCounts];
        entries.sort((a,b)=> {
            if(a[1] === b[1]){
                return a[0]<b[0]? -1 : 1;
            }
            return b[1] - a[1];
        });
        for(let entri of entries){
            entri[1] = (entri[1]/this.totalLetters) * 100 ;
        }
        entries=entries.filter(entri=>entri[1]>=1);
		/*No entiendo esta linea de codigo*/
        let lines = entries.map( ([l,n]) => `Letra  ${l} : ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`);
        return lines.join("\n");
    }
}

async function histogramFromStdin(){
    process.stdin.setEncoding("utf-8");
    let probar  = new Histograma();
	/*No entiendo la diferencia con un for normal*/
    for await( let chunk of  process.stdin){
        probar.add(chunk);
    }
    return probar;
}

histogramFromStdin().then((e) => console.log(e.toString())).catch((e)=>console.log(e));