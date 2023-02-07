"use strict";

const person = {
  name: "George",
  age: 29,
  tellNameAndAge() {
    alert(`My name is ${this.name} and I am ${this.age} years old.`);
  },
}

person.tellNameAndAge();
console.log(`${person.name}, ${person.age}`);





/* Erstelle ein Objekt und speichere es als Variable person
Deklariere die Eigenschaft name mit dem Wert deines Namens,
Deklariere die Eigenschaft alter mit dem Wert deines Alters,
Deklariere die Methode (Funktion) sagNameAlter im Objekt
Nutze den Befehl alert() im Funktionskörper um name, alter anzuzeigen.
Gib in der Konsole name und alter aus.
Rufe die Funktion sagNameAlter aus dem Objekt auf. */