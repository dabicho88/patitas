
const grupos = document.querySelectorAll('.grupo');
const start = document.querySelector('.start');
const inputs = document.querySelectorAll('.grupo input');
let papaGpo;
let papaDelBack;
const regresos = document.querySelectorAll('.back');
const losPerritos = [];
let oneDog = [];
let num = -1;
const tamanno = ['chico','mediano','grande'];
const pelaje = ['corto','mediano','largo','rizado'];
const color = ['negro','blanco','miel','mixto'];
const nombres = ['Max', 'Luna', 'Rocky', 'Bella', 'Toby', 'Daisy', 'Bruno', 'Nala', 'Rex', 'Coco', 'Simba', 'Lola', 'Thor', 'Sasha', 'Leo', 'Mía', 'Oso', 'Kira', 'Toby', 'Zoe', 'Zeus', 'Maya', 'Milo', 'Roxy', 'Charlie', 'Chispa', 'Buster', 'Canela', 'Duke', 'Negra', 'Bambi', 'Trixie', 'Rocky', 'Choco', 'Bella', 'Polo', 'Lili', 'Charly', 'Blanquito', 'Rocky', 'Cira', 'Noche', 'Axel', 'Mamba', 'Pippa', 'Trufa', 'Canelo', 'Estrella']
const elPerritoElegido = [];
let perrito;

//Creando todos los objetos posibles 
class Perrito {
    constructor(tamanno, pelaje, color){
        this.tamanno = tamanno;
        this.pelaje = pelaje;
        this.color = color;
    }
}
//const perro1 = new Perrito('chico','mediano','miel','5','dominante');

//Arranca la función al darle click al boton de inicio
start.addEventListener('click', function(){
    start.style.display='none'; 
    grupos[0].classList.add('visible');
//Muestra u oculta grupo
for(inp=0;inp<inputs.length;inp++){
    inputs[inp].addEventListener('click', function(){
        if(this.checked == true){
            papaGpo = this.parentNode.parentNode;
            if(papaGpo.classList.contains('visible') == true){
               setTimeout(() => papaGpo.classList.remove('visible'), 500);
                if(papaGpo.nextElementSibling !== null){
                    setTimeout(() => papaGpo.nextElementSibling.classList.add('visible'), 500);
                }
            }
        }
        if(this.checked == true && this.getAttribute('name').toString().includes('personality') == true){
            document.querySelector('.tuSeleccion').style.display = 'block';
            inyectaInfoDelPerrito();
        }
    });
}

//Funcion que agrega la info del perrito y su foto al hacer match de la info elegida por el usuario con el array que contiene todos los objetos
function inyectaInfoDelPerrito(){
    for(const inpCheck of inputs){
        if(inpCheck.checked == true){
            elPerritoElegido.push(inpCheck.value);
        }
    }
    //Ciclos anidados que iteran entre todas las variantes
    for(const size of tamanno){
        for(const pelo of pelaje){
            for(const col of color){
                num+=1;
                oneDog = new Perrito(size,pelo,col);
                oneDog.nombre = `${nombres[num]}`;
                losPerritos.push(oneDog);
                //console.log(num+=1);
                console.log(losPerritos);
            }
        }
    }
    perrito = losPerritos.find(perrito => perrito.tamanno === elPerritoElegido[0] && perrito.pelaje === elPerritoElegido[1] && perrito.color === elPerritoElegido[2]); 
    //console.log(losPerritos);
    //console.log(elPerritoElegido);
    document.querySelector('.tuSeleccion').innerHTML = `
        <h2>${perrito.nombre}</h2>
      <p>Hola!, mi nombre es ${perrito.nombre}, soy un perro de tamaño ${perrito.tamanno}. Mi caracter la mayoría de las veces es muy ${elPerritoElegido[4]} y me encanta recibir cariño. Tengo ${elPerritoElegido[3]} añitos y  quisiera pasar los que me quedan junto a ti. Mi color es ${perrito.color} y mi pelaje es ${perrito.pelaje}. Sería maravilloso poder llenar nuestras vidas de recuerdos juntos. </p>
    <img src='img/${perrito.color}.jpg'>
        <div class="refresh">Nueva Búsqueda</div>
    `;
    //Almacenando en localstorage los perritos favoritos
    localStorage.setItem('Tus perritos favoritos', perrito.nombre);

}

//Regresar a mostrar el grupo anterior
for(bck=0;bck<regresos.length;bck++){
    regresos[bck].addEventListener('click', function(){
        papaDelBack = this.parentNode;
        if(papaDelBack.classList.contains('visible') == true){
            papaDelBack.classList.remove('visible');
            papaDelBack.previousElementSibling.classList.add('visible');
            for(const srchLabel of papaDelBack.previousElementSibling.children){
                if(srchLabel.tagName == 'LABEL'){
                    for(const labInpu of srchLabel.children){
                        if(labInpu.checked = true){
                            labInpu.checked = false;
                        }
                    }
                }
            }
        }
    });
}
});



























