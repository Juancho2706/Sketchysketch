const $zonadibujo = document.querySelector('.zonadibujo');
const fragmentocontenedor = new DocumentFragment();
let $selecciondecolor = document.querySelector('#color');
let presionaeldiv = false; 
let p32 = document.querySelector('.p32');
let p64 = document.querySelector('.p64');
let rainbow = document.querySelector('.rainbow');
let maximocuadro = 0;
let tamanocuadritos = 0;
let rainbowmode = false;

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
    document.querySelector('.zonadibujo').style.maxHeight = (cantidad * tamanocuadritos)+'px';
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
            if(presionaeldiv){
                if(rainbowmode == true){
                    unpuntito.style.backgroundColor = getRandomColor();
                }else{
                    unpuntito.style.backgroundColor = $selecciondecolor.value
                }
            }
        });
        fragmentocontenedor.appendChild(unpuntito);
    }
}
p32.addEventListener('click', seleccionusuario.bind(null,32));
p64.addEventListener('click', seleccionusuario.bind(null,64));
rainbow.addEventListener('click', function(e){
    if(rainbowmode == false){
    rainbowmode = true;
    }else if(rainbowmode == true){
        rainbowmode = false;
    }
});
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
