fetch("datos.json")
  .then(respuesta => respuesta.json())
  .then(datos => {

    // 🔹 Texto principal (lo que ya tenías)
    document.getElementById("contenido").innerHTML = `
      <h2>${datos.nombre}</h2>
      <p>${datos.mensaje}</p>
    `;

    // 🔹 Tarjetas (nuevo)
    const catalogo = document.getElementById("catalogo");

    datos.miembros.forEach(miembro => {
      catalogo.innerHTML += `
        <div class="tarjeta">
          <img src="${miembro.imagen}" alt="${miembro.nombre}">
          <h2>${miembro.nombre}</h2>
          <p>${miembro.descripcion}</p>
          <button>Ver más</button>
        </div>
      `;
    });

  })
  .catch(error => {
    console.log("Error al cargar JSON:", error);
  });
