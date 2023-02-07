let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5"
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"]
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5"
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"]
  }
];

studentData.forEach ((info) => {
  console.log(`name: ${info.name}`);
  console.log(`coop: ${info.coop}`);
  console.log(`city: ${info.address.city}`);
  console.log(`emails: ${info.emails}`);
})



/* Verwende den Code aus dem Kommentarbereich.
Greife mithilfe von forEach() oder map() auf Eigenschaften dieses Objekts zu.
Schreibe Funktion für das Objekt, die in der Console folgendes ausgeben:
name
coop
city
emails
 */
