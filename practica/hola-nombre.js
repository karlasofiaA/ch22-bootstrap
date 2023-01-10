function changeName(){
    let nombre = prompt("¿Cuál es tu nombre?");
    document.getElementById("name").innerHTML = "Hola, " + nombre;
}