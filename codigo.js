const $zonadibujo = document.querySelector('.zonadibujo');
const fragmentocontenedor = new DocumentFragment();
let presionaeldiv = false; 
let p32 = document.querySelector('.p32');
let p64 = document.querySelector('.p64');
let maximocuadro = 0;
let tamanocuadritos = 0;

function seleccionusuario(cantidad){
    $zonadibujo.textContent = '';
    maximocuadro = cantidad * cantidad;
    switch(cantidad){
        case 32:
            tamanocuadritos = 15;
            break;
        case 64:
            tamanocuadritos = 10;
            break;
    }
    document.querySelector('.zonadibujo').style.maxWidth = (cantidad * tamanocuadritos)+'px';
    crearcuadro(tamanocuadritos);
    $zonadibujo.appendChild(fragmentocontenedor);
}
function crearcuadro(lospixeles){
    for (let index = 0; index < maximocuadro; index++) {
        let unpuntito = document.createElement('div');
        unpuntito.classList.add('pixel');
        unpuntito.style.height = lospixeles+'px';
        unpuntito.style.width = lospixeles+'px';
        unpuntito.addEventListener('mousedown', function(e){
            presionaeldiv = true;
        });
        unpuntito.addEventListener('mouseup', function(e){
            presionaeldiv = false;
        });
        unpuntito.addEventListener('mouseover', function(e){
            if(presionaeldiv)[
                unpuntito.style.backgroundColor = 'black'
            ]
        });
        fragmentocontenedor.appendChild(unpuntito);
    }
}
p32.addEventListener('click', seleccionusuario.bind(null,32));
p64.addEventListener('click', seleccionusuario.bind(null,64));