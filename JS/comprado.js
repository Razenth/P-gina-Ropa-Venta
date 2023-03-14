let exportado=JSON.parse(localStorage.getItem('user'))
let producto=document.getElementById('producto').innerHTML=`<h1>Gracias por comprar nuestro: <br>${exportado.producto}</h1>`

const volver=document.querySelector('.volver')

volver.addEventListener('click',()=>{
    location.href='../HTML/principal.html'
})


