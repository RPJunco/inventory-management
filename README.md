# Inventory Management

## ✍️ Descripción del proyecto ✍️

En el siguiente proyecto se creara un programa escrito en codigo javascript que permitira gestionar un arreglo denominado 'inventario', el cual contiene en su interior objetos denominados 'producto'. Para la gestion de dicho arreglo de objetos
se utilizaran funciones creadas por el desarrollador.

### 🧮 Problemas planteados 🧮:
- #### Agregar Producto
  Implementa una función 'agregarProducto' que reciba un objeto 'producto' (con las propiedades mencionadas) y lo añada al array 'inventario'.
- #### Eliminar Producto
  Implementa una función 'eliminarProducto' que reciba el código de un 'producto' y lo elimine del array 'inventario'.
- #### Actualizar Cantidad
  Implementa una función 'actualizarCantidad' que reciba el código de un 'producto' y una nueva cantidad, y actualice la cantidad del 'producto' correspondiente en el array 'inventario'.
- #### Buscar Producto por Categoría
  Implementa una función 'buscarProductoPorCategoria' que reciba una categoría (string) y devuelva un array con todos los productos de esa categoría.
- #### Calcular Valor Total del Inventario
  Implementa una función 'calcularValorTotal' que calcule y devuelva el valor total del inventario (suma del precio de cada producto multiplicado por su cantidad).
  
## 📃 Instrucciones para ejecutar los scripts 📃

Para poder ejecutar los scripts y poder visualizar los resultados de cada ejercicio existen dos formas:

🥇
La primera es crear un archivo index.html (El archivo index.html es proporcionado en el repositorio). En el mismo archivo agregamos su estructura basica y luego en el body introduccimos la etiqueta ' <script></script> ', en esa etiqueta agregamos un atributo llamado 'src' y dentro de
esta 'src="ejercicio(n).js" '.

![Archivo index.html con su estructura basica](https://github.com/RPJunco/javascript-ejercicios/assets/109442443/f03a7eba-3315-44b7-b3e7-404f7b550f97)

Una vez que tenemos la estructura html y el archivo .js enlazado como se muestra en la imagen anterior(Tomamos como ejemplo el ejercicio n°1 pero el procedimiento es aplicable para cualquier ejercicio), podemos abrir el archivo 'index.html' en
cualquier navegador que deseemos.

![Busqueda del archivo index.html en disco](https://github.com/RPJunco/ejercicios-javascript/assets/109442443/b6348e84-917f-4483-b444-6afa0f4bdd64)

Cuando abrimos el archivo en el navegador buscaremos en una opcion que sera util para ejecutar y visualizar los scripts, llamada herramientas del desarrollador.

![Busqueda de la herramienta del desarrollador](https://github.com/RPJunco/ejercicios-javascript/assets/109442443/f23aa9d5-8d8c-47d5-a545-77bc893fb3d4)

A la misma herramienta se puede acceder si se cuenta con la tecla F12 en el teclado del usuario.

Una vez se despliegue la herramienta en el navegador se buscara la opcion llamada consola.

![Seleccionar la consola](https://github.com/RPJunco/ejercicios-javascript/assets/109442443/e5d5d0aa-87c9-448a-9396-faf589204624)

En la consola se utilizara la funcion necesaria para visualizar los valores que el script calcula de forma interna.

![Ingresar funcion y obtener valores](https://github.com/RPJunco/javascript-ejercicios/assets/109442443/a88d39b6-e9f5-4eb4-9280-7616eb1f5932)


🥈
La segunda opción es util para aquellos que esten utilizando como editor de codigo fuente la herramienta Visual Studio Code (VSC). Se instalara en el mismo un pluggin/extensión llamado Quokka.js, esta extension permite visualizar en el editor
los errores, cambios y resultados.

![Extension Quokka.js](https://github.com/RPJunco/ejercicios-javascript/assets/109442443/eed470cf-d909-4b66-bef9-ecff4607a36e)

Se debe iniciar la extension Quokka para poder visualizar los resultados, para ello abrimos la paleta de comandos (tambien se puede usar un atajo de teclado --> Ctrl + Mayús + P), luego seleccionamos la opción 'Quokka.js: Toggle (Start/Stop) on Current File'.

![Iniciar la extension Quokka](https://github.com/RPJunco/ejercicios-javascript/assets/109442443/147426fc-66c5-48b0-8faa-deecdde76abd)


Si ingresamos el archivo que contiene el codigo .js podemos visualizar los resultados al lado derecho de cada 'console.log()'

![Codigo js visualizado con la herramienta Quokka.js](https://github.com/user-attachments/assets/6f457681-337a-4d1a-a647-69105dd7d1e1)
