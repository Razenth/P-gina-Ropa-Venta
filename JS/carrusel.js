let foto_carrusel=document.getElementById('foto_carrusel')

export function rotar(){
    if(indice<FontFaceSetLoadEvent.length){
        foto_carrusel.src=fotos[indice]
        indice++
    }else{
        indice=0
    }
}
const fotos=[
    '../images/localRopa.jpeg',
    '../images/localRopa2.jpg'
]
let indice=0

setInterval(rotar,2000)