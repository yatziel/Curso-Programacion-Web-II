/* 

  Objetos -> Son estructuras de datos que representan propiedades, valores y acciones.

  Propiedades o atributos.
  
    Son las características del objeto. (Nombre, Tipo, Poder, Habilidades...)
    Se representan por pares de 'clave (key) : valor (value)'
    Datos: Strings, Numbers (Int y Float), Booleans, Arrays...

  Comportamiento o acciones
    
    Es aquello que puede hacer un objeto. (Atacar, Defender, Caminar, Brincar...)
    Se representan con funciones
    
  Para declarar un objeto escribimos:

    const nameObject = {
      key : value,
    }

  Para acceder a las propiedades y acciones del objeto utilizamos la nomenclarutra del punto.

    nameObject.key
  
*/


const pokemon = {
  name : 'Pikachu',
  attack : 530,
  captured : true,
  skills : ['Impactrueno' , 'Rayo', 'Chispas']
}

console.log(pokemon);

console.log(pokemon.name);
console.log(pokemon.attack);
console.log(pokemon.captured);
console.log(pokemon.skills[0]);
console.log(pokemon.skills[1]);

console.log(pokemon['name']);

document.write(`${pokemon.name} tiene un poder de ${pokemon.attack} y sus hábilidades más poderosas son ${pokemon.skills.join(', ')}`);