let form = document.querySelector('#formulario')

form.addEventListener('submit', function (evento) {
    evento.preventDefault()
    let numeroUsuario = evento.target.numero_usuario.value
    let sumatoria = 0

    console.log(numeroUsuario);

    for (x = 1; x <= numeroUsuario; x++) {
        sumatoria = sumatoria + x
    }

    document.querySelector("#resultado1").innerHTML = sumatoria
})



let form2 = document.querySelector("#formulario2")
form2.addEventListener('submit', function (evento) {
    evento.preventDefault()
    let numeroUsuario = evento.target.numero_impar_par.value
    numeroUsuario
    if (numeroUsuario % 2 != 0) {
        document.querySelector("#resultado2").innerHTML = "impar"
    }
    else {
        document.querySelector("#resultado2").innerHTML = "par"
    }
}
)


let form3 = document.querySelector("#formulario3")
form3.addEventListener('submit', function (evento) {
    evento.preventDefault()
    let numeroEdad = evento.target.numero_edad.value
    console.log("🚀 ~ numeroEdad:", numeroEdad)
    let genero = evento.target.genero_h_m.value

    if (numeroEdad == "") {
        document.querySelector("#premio").innerHTML = "rellene el espacio"
    }
    else if (numeroEdad <= 10) {
        document.querySelector("#premio").innerHTML = "reclamar un jugo"
    }
    else if (numeroEdad >= 18) {
        document.querySelector("#premio").innerHTML = "reclamar una cerveza"
    }
    else if (numeroEdad > 10 || numeroEdad < 18) {
        document.querySelector("#premio").innerHTML = "no hay nada para usted"
    }
    


    if (genero == "mujer") {
        document.querySelector("#premio_2").innerHTML = "reclama una porcion de pizza hawaiana"
    }
    else if (genero == "hombre") {
        document.querySelector("#premio_2").innerHTML = "reclama una porcion de pizza tres carnes"
    }
    else {
        document.querySelector("#premio_2").innerHTML = "no hay nada para usted"
    }

})





