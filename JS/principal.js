
import {rotar} from './carrusel.js'
rotar()

let exportacion='pop'
let elementos=''
const url = "https://fakestoreapi.com/products";
const productos = document.querySelector(".products");
async function traer() {
  const respuesta = await fetch(url)
  const datos = await respuesta.json()
    elementos=Array.from(datos)
    let cont=0

  datos.forEach(producto=>{
    productos.innerHTML+= `       
    <div class="card_product">

        <div class="card_product_title">
            <h4>${producto.title}</h4>
        </div>

        <div class="card_product_image">
            <img src="${producto.image}" alt="">
        </div>

        <div class="card_product_description">
            <p>${producto.description}</p>
        </div>

        <div class="card_product_price">
            $${producto.price}
        </div>

        <div class="card_product_button" >
            <button class="btn-comprar" value=${cont}>COMPRAR</button>
        </div>
    </div>
    `
    cont++
})
}
traer();
let cajon_productos=document.querySelector('.products')
cajon_productos.addEventListener('click',(event)=>{
    if(event.target.className=="btn-comprar"){
        document.getElementById('modal').style.display= 'flex'
        document.querySelector('#contenido').innerHTML=`
        <div class="card_product-modal">

        <div class="card_product_title-modal">
            <h4>${elementos[event.target.value].title}</h4>
        </div>

        <div class="card_product_image-modal">
            <img src="${elementos[event.target.value].image}" alt="">
        </div>

        <div class="card_product_description-modal">
            <p>${elementos[event.target.value].description}</p>
        </div>

        <div class="card_product_price-modal">
            $${elementos[event.target.value].price}
        </div>

        <div class="card_product_button-modal" >
            <button class="btn-sale">COMPRAR</button>
            <button class="btn-cancelar">CANCELAR</button>
        </div>
    </div>
        `
    }
})

const boton_cerrar=document.querySelector('.cerrar')
boton_cerrar.addEventListener('click',()=>{
    document.getElementById('modal').style.display= 'none'
})


const ventana=document.querySelector('.ventana')
ventana.addEventListener('click',event=>{

    if(event.target.className=="btn-cancelar"){
        modal.style.display='none'
    }

    let name_product=document.querySelector('.card_product_title-modal').innerText
    exportacion=name_product
    if(event.target.className=="btn-sale"){
        alert(`Gracias por haber comprado ${name_product}`)
        window.open('../HTML/comprado.html ',' _blank')
        modal.style.display='none'
        let usuario = {
            producto:`${exportacion}`
          }
        
        let contenidoUser = JSON.stringify(usuario);
          
          localStorage.setItem('user', contenidoUser);
    }
})

let usuario = {
    producto:`${exportacion}`
  }

let contenidoUser = JSON.stringify(usuario);
  
  localStorage.setItem('user', contenidoUser);

const salir=document.querySelector('.Salir')

salir.addEventListener('click', ()=>{
    location.href='../HTML/index.html'
})

