onload=Saludar()
onclick=Fondo()

function Fondo(){
    alert("click!")
    document.getElementsByTagName("p").style = "background-color:cyan"
}

function Saludar(){
    alert("Hola!")
}

function Funcion(){
    x="14"
    alert("Hola " + (x+4))
}

function Sumar(){
        x=5
        y=34
        document.getElementById("demo").innerHTML="La suma de" +x+ " + " +y+ " = " (x+y)
}