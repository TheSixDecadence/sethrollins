<!DOCTYPE html>
<html>
<head>
  <title>Saludo Personalizado</title>
</head>
<body>
  <script>
    function mostrarSaludo() {
      // Pedir al usuario su nombre
      var nombre = prompt("Por favor, introduce tu nombre:");

      // Comprobar si el usuario ingresó un nombre o canceló el cuadro de diálogo
      if (nombre) {
        // Mostrar el mensaje de saludo personalizado
        alert("¡Hola, " + nombre + "! Bienvenido/a a nuestra página web.");
      } else {
        // Mostrar un mensaje si el usuario canceló el cuadro de diálogo
        alert("No has ingresado un nombre. ¡Intenta de nuevo!");
      }
    }

    // Llamar a la función para mostrar el saludo cuando la página cargue
    window.onload = mostrarSaludo;
  </script>
</body>
</html>
