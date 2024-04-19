const boton = document.getElementById('boton');
            boton.addEventListener("click", function(){
            window.scroll({
                top: 0,
                behavior: "smooth"
            })
            });
const boton_c = document.getElementById('botonc');
boton_c.addEventListener("click", function(){

    boton.style.backgroundColor = "blue";

   
    
})



