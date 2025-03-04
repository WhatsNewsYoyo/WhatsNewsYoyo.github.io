async function CatImage(){

    imageContainer.innerHTML = "<p>Cargando!</p>"
    const response = await fetch("https://cataas.com/cat");
    const blob = await response.blob();

    const img = document.createElement("img");
    img.src = URL.createObjectURL(blob);

    imageContainer.innerHTML = "";
    imageContainer.appendChild(img);
}


async function CatGif(){

    imageContainer.innerHTML = "<p>Cargando!</p>"
    const response = await fetch("https://cataas.com/cat/gif");
    const blob = await response.blob();

    const img = document.createElement("img");
    img.src = URL.createObjectURL(blob);

    imageContainer.innerHTML = "";
    imageContainer.appendChild(img);
}