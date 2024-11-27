var admin = require("firebase-admin");

var serviceAccount = require("./clave_privada.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ejercicio1da-default-rtdb.firebaseio.com"
});

var db = admin.database();
var ref = db.ref('server/data/nodejs');

var usersRef = ref.child("usuarios");
usersRef.set({
    alumno: [{
        alumnos: "carlos reyes",
        edad: 28,
        salary:2304.54
    },
    {
     nombre: "renzo chipana",
     edad: 19,
     salario: 20.00 
    }]
})