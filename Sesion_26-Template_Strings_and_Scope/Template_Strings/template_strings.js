/* 

  Template Strings

  Cadenas de texto caracteres que pemirten simplificar el código cuando queremos concatenar datos.

  Se delimitan con dos tildes invertidas o acento grave: 
  
    `Template String`

  Pueden contener expresiones identifiacdas con el signo de dolar y envueltas en llaves (marcador).
  
    ${expresion}

  Una expresión es cualquier unidad de código válida que se resuelve en un valor:
  
    x = 'Gato'        - Asignación
    3 + 4             - Aritmética
    true == true      - Lógica

*/


let nombre = 'Yatto';
let apellido = 'López';
let edad = 33;

console.log('Hola ' + nombre + ' ' + apellido + ' tienes ' + edad + ' años.');

console.log(`Hola ${nombre} ${apellido} tienes ${edad} años.`);

console.log(`Hola ${nombre} ${apellido}. El año siguiente tendrás ${edad+1} años.`);