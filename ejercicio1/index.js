var admin = require("firebase-admin");

var serviceAccount = require("./clave_privada.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ejercicio1-da-default-rtdb.firebaseio.com"
});

var db = admin.database();
var ref = db.ref('server/data/library');

var booksRef = ref.child("books");
booksRef.set({
    books: [
        {
            title: "Cien años de soledad",
            author: "Gabriel García Márquez",
            year: 1967,
            copies: 5
        },
        {
            title: "Don Quijote de la Mancha",
            author: "Miguel de Cervantes",
            year: 1605,
            copies: 3
        }
    ]
});

var authorsRef = ref.child("authors");
authorsRef.set({
    authors: [
        {
            name: "Gabriel García Márquez",
            nationality: "Colombian",
            birthYear: 1927
        },
        {
            name: "Miguel de Cervantes",
            nationality: "Spanish",
            birthYear: 1547
        }
    ]
});
