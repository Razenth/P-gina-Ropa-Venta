let exportado=JSON.parse(localStorage.getItem('user'))
let producto=document.getElementById('producto').innerHTML=`<h1>${exportado.producto}</h1>`

console.log(exportado.producto)

// producto.innerHTML=(`<h1>${exportado.producto}</h1>`)


