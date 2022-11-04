console.log("launch");

let menuVisible = false;

//funcion que oculta o muestra el menu 
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById('nav').classList = "";
        menuVisible = false;

    }else{
        document.getElementById('nav').classList = "responsive";
        menuVisible = false;
    }

}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}