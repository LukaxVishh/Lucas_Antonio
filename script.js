const titulo = document.getElementById('digitando');
const msg = "Web Developer and UX/UI Design."


var statusTitulo = 0

function apagarTitulo() {
    titulo.innerHTML = '';

}

function sleep(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

function ativarLetra(elemento) {

    const arrTexto = msg.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {

        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);

    });

}

async function loopTitulo(x){
        for(i = 0; i < x; i++){

            if(statusTitulo === 0){
                ativarLetra(titulo);
                statusTitulo = 1;

            } else {
                await sleep(4000);
                apagarTitulo()
                statusTitulo = 0
            }

    }


}

loopTitulo(9)
