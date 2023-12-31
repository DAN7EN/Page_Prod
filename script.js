function BuscarProducto() {
  var textoBusqueda = document.getElementById("buscador").value.toLowerCase();; // Obtener el texto de búsqueda y convertirlo a minúsculas
  var Productos = document.getElementsByClassName("Producto"); // Obtener todos los divs que contienen películas
  var numProductos = Productos.length;
  console.log(numProductos);
  var ProductoEncontrada = false;

  for (var i = 0; i < numProductos; i++) {
    var Producto = Productos[i];
    var titulo = Producto.getElementsByTagName("h2")[0].innerHTML.toLowerCase(); // Obtener el título del producto y convertirlo a minúsculas
    console.log(titulo);
    if (titulo.includes(textoBusqueda)) {
      // Comprobar si el texto de búsqueda está en el título
      Producto.style.display = "block"; // Mostrar el producto si coincide con el texto de búsqueda
      ProductoEncontrada = true;
    } else {
      Producto.style.display = "none"; // Ocultar el producto si no coincide con el texto de búsqueda
    }
  }
  if (!ProductoEncontrada) {
    alert("No se encontraron productos con ese nombre."); // Mostrar un mensaje si no se encontraron productos
  }
}


function guardarDatos() { 
  var name = document.getElementById("name").value; 
  var email = document.getElementById("email").value; 
  var comment = document.getElementById("comment").value; 
  
  if (!name || !email || !comment) { 
    alert("Los campos no pueden estar vacíos."); 
    return; } 

    var dateTime = new Date();
    
    // Crear un objeto con los datos del comentario 
    var comentario = { 
      name: name, 
      email: email, 
      comment: comment,
      dateTime: dateTime.toLocaleString(),}
      ; 
      
      // Obtener los comentarios existentes del localStorage o crear un array vacío si no hay comentarios 
      var comentarios = JSON.parse(localStorage.getItem("comentarios")) || []; 
      
      // Agregar el nuevo comentario al array de comentarios 
      comentarios.push(comentario); 
      
      // Guardar el array de comentarios actualizado en el 
      localStorage.setItem("comentarios", JSON.stringify(comentarios)); 
      
      // Mostrar los comentarios actualizados 
      mostrarComentarios(); 
      
      //Se borran los datos de la comentarios 
      document.getElementById("name").value = ""; 
      document.getElementById("email").value = ""; 
      document.getElementById("comment").value = ""; 
    } 
    
    function mostrarComentarios() { 
      var comentarios = JSON.parse(localStorage.getItem("comentarios")) || []; 

      var comentariosHTML = comentarios 
      .map(function(comentario) { 
        return ` 
        <div class="comentario"> 
        <h4>${"Nombre: " + comentario.name}</h4> 
        <p>${"Email: " + comentario.email}</p> 
        <p>${"Comentario: " + comentario.comment}</p> 
        <p>${"Fecha: " + comentario.dateTime}</p>
        </div> 
        
        `; }) 
        .join(""); 
        document.getElementById("contenedor-comentarios").innerHTML = comentariosHTML;
      
      } function borrarComentarios() { 
        localStorage.removeItem("comentarios"); 
        mostrarComentarios(); 
      }
