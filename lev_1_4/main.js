"use strict";

let unsereHaustiere = [
  {
    tiertyp: "Katze",
    names: [
      "Gipsy",
      "Nala",
      "Dinky"
    ]
  },
  {
    tiertyp: "Hunde",
    names: [
      "Knöpfchen",
      "Pinselchen",
      "Droopy"
    ]
  },
  /*  function changeName (i, newName) {
    return this[1].names[i] = newName;
  } */
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

function changeName (i, newName) {
  return unsereHaustiere[1].names[i] = newName;
}

changeName(0, "Thunder");
changeName(1, "Mellow");
changeName(2, "Yeti");
console.log(unsereHaustiere);




/* In dieser Übung lernen wir, wie man auf die Objekte zugreift.

Verwende den Code aus dem Kommentarbereich.
Greife auf die Werte dieses Objekts zu:
"Nala"
"Droopy"
und lasse dir einmal alle Hundenamen anzeigen
Erstelle eine Methode, mit der man die Hundenamen ändern kann und rufe diese Methode auf.
 */