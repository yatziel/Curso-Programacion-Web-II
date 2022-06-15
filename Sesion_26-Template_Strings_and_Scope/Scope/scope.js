/* 

  Scope o ámbito, es la zona donde existe una variable o constante

  Global: Podemos acceder a ellas desde cualquier parte del código
  Local: Variables creadas dentro de una función, solo pueden ser accdedidas desde su propia función o una función anidada.

  Variables es un espacio de memoria que reservamos para almacenar un dato y que podría cambiar a lo largo del uso del programa.

    Se declaran, inicializan y modifican.

    Con ES6 la palabra que se usa para declarar variables es 'let'. No se recomienda usar var, esto es por un concepto llamado hoisting.
  
  Constantes es un espacio de memoria que reservamos para almacenar un dato y no cambiara a lo largo del uso del programa.

    La palabra que se usa para declarar constantes es 'const'

*/

let nombre = 'Yatto'; /* Declaramos Variable Global */

function saludar() {
  /* Imprimimos Variabla Global */
  console.log(`¡Hola ${nombre}!`);
  /* Declaramos Variable Local dentro de la funcion*/
  let apellido = 'López';
  /* Imprimimos Variabla Local */
  console.log(`¡Hola Gato ${apellido}!`);
  /* Puedo Modificar Variable Global */
  nombre = 'Yatezito'; 
  console.log(`¡Me puedes decir ${nombre}!`);
  
  /* Funcion Anidada dentro de otra funcion */
  function despedirse() {
    nombre = 'Ilhuicatl'; /* Modifico Variable Global */
    console.log(`¡Chao ${nombre}!`);
  }
  despedirse();/* Ejecutamos la funcion anidada despedirse*/
}

/* Imprimimos Variable Global */
console.log(`Mi nombre es ${nombre}`)
/* Intentamos imprimir variable local*/
/* console.log(`Mi apellido es ${apellido}`)*/
/* Ejecutamos la funcion saludar */
saludar();
/* Tampoco puedo ejectutar funciones anidadas */
despedirse();

