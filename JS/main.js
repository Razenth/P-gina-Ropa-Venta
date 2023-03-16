let password=document.getElementById('password')
let user=document.getElementById('user')
let login=document.getElementById('login')
let estado='oculto'
let error=document.getElementById('error')


let usuarios=[
{
    nombre:'Madara Uchiha',
    username:'MadaraHokage',
    userpass:'soymejorquesenju'
},
{
    nombre:'Jotaro Kujo',
    username:'KujoJotaro',
    userpass:'yareyaredaze'
},
{
    nombre:'Pepito',
    username:'pepito123',
    userpass:'123456'
},
{
    nombre:'Minato Namekaze',
    username:'ElmejorHokage',
    userpass:'amoAmihijoNaruto'
}
]


function mostrar(){
    if(estado=='oculto'){
        password.type='text'
        estado='mostrar'
    }

    else if(estado=='mostrar'){
        password.type='password'
        estado='oculto'
    }
}


login.addEventListener('click',()=>{
// location.href='https://google.com'
    if(usuarios.find(usuarios=>usuarios.username==user.value)){
        indice=usuarios.findIndex(usuarios=>usuarios.username==user.value)
            if(usuarios[indice].userpass==password.value){
                alert(`Bienvenido ${usuarios[indice].nombre}`)
                user.value=''
                password.value=''
                location.href='./HTML/principal.html'
            }else{
                mostrarError()
            }

    }else{
        mostrarError()
    }
})


function mostrarError(){
    user.value=''
    password.value=''
    error.style.display='block'
        setTimeout(()=>{
            error.style.display='none'
        },2000)
    
}




