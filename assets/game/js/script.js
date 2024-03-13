/* mapeamento dos objetos */
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const btnstart = document.querySelector('.startbtn');
const clouds = document.querySelector('.clouds');
var loop = null;

/* functions begin */

//Atribui ao personagem a animação de pular
const jump = ()=> {

    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);
}

const start = ()=>{
    //Exibe o personagem na tela
    mario.style.display='block';
    //oculta o botão inicio
    btnstart.style.display='none';

    //remove a propriedade estatica que mantem o pipe fora da tela
    pipe.style.removeProperty('rigth');
    //atribui a animação que faz o pipe "andar" na tela
    pipe.style.animation ='pipe-animation 2s infinite linear';
    //remove o atributo estatico das nuvens que as mantem fora
    clouds.style.removeProperty('right');
    //atribui a animação para as nuvens
    clouds.animation = 'clouds-animation 3s infinite linear';

    //valida em intervalos se o personagem encostou no pipe
    loop = setInterval(()=>{ 

        const pipePosistion = pipe.offsetLeft;
        const marioPosition =  +window.getComputedStyle(mario).bottom.replace('px', '');
    
        if(pipePosistion <= 80 
            && pipePosistion > 0
            && marioPosition < 80)
        {
            //se encostou para as animações e apresenta a imagem de game over
            pipe.style.animation = 'none' ;
            pipe.style.left = `${pipePosistion}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = "assets/game/imgs/game-over.png"
            mario.style.width = "50px";
            mario.style.left = "50px";
            
            //interrompe o loop
            clearInterval(loop);
        }
        
     },10)
}
/*functions end*/

//evento para acionar o pulo em qualquer botão
document.addEventListener('keydown', jump);

btnstart.onclick=start;
 
