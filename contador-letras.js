let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendom turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsao cursus";

function contarLetras(cadena) {
    cadena = cadena.toLowerCase();
    

    let contador = {};

   
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];

        
        if (/[a-z]/.test(caracter)) {
            if (contador[caracter]) {
                contador[caracter]++;
            } else {
                contador[caracter] = 1;
            }
        }
    }

    return contador;
}


let resultado = contarLetras(par);

console.log(resultado);