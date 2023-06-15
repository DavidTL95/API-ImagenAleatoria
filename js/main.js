//2. Crear una web con un botón que me permita generar una imagen aleatoria.
//3. Modificar la web anterior para que me permita escoger entre varias categorías, al darle al botón pasaré a otra página en la que aparecerá la imagen que quería generar y un botón para volver a la página original.

let boton = document.getElementById("boton");
let contenedorImagen = document.getElementById("contenedorImagen");

//1. API CALL Y VER RESULTADOS.

const traerImagenes = async () => {

    let res = await axios.get("https://randomuser.me/api/")

    console.log(res);
    return res.data.results;
}

boton.addEventListener('click', () => {
    contenedorImagen.replaceChildren()

    traerImagenes().then((res) =>{
        res.map((persona) => {
            //console.log(persona);

            const contenedorPersona = document.createElement("div");

            contenedorImagen.appendChild(contenedorPersona);
            contenedorPersona.classList.add("imagen")
            contenedorPersona.style.backgroundImage = `url(${persona.picture.large})`;
        })
    })
})