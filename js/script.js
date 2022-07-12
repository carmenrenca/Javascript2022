/**
 *-------------- METHOD at() ----------------
 */
const list = [1, 2, 3, 4];
console.log("Ejemplo 1 at()---> ", list.at(2));
const str = "1234";
console.log("Ejemplo 2 at()---> ", str.at(-2));

/**
 * -----  ---- METHOD Object.hasOwn() ---------------
 */

const myObject = {
  name: "Carmen",
  description: "Aprende Javascript",
  fecha: 2022,
};
console.log("Ejemplo 1 Object.hasOwn()---> ", Object.hasOwn(myObject, "name")); //return true
console.log("Ejemplo 2 Object.hasOwn()---> ", Object.hasOwn(myObject, "edad")); //return false

/**
 * --------- PRIVATE ATRIBUTES AND METHODS ---------------
 */
class Admin {
  nombre = "Carmen";
  #apellido = "Rendón";

  #getYear() {
    return "2022";
  }
}
const instancia = new Admin();

console.log(instancia.nombre); //return 'Carmen'
/*console.log(instancia.#apellido); // return Error
console.log(instancia.#getYear()); // return Error*/

/**
 * --------- AWAIT ---------------
 */

const results = await fetch(
  'https://pokeapi.co/api/v2/ability/?limit=20&offset=20"'
);
const data = await results.json();
