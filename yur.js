fetch("contacto2.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("contenido").innerHTML = data;
    });