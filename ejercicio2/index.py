import firebase_admin
from firebase_admin import credentials, db

# Inicializa la aplicación de Firebase con la clave privada
cred = credentials.Certificate("./clave_privada.json")  # Ruta al archivo JSON de la clave privada
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://ejercicio2-da-76dd5-default-rtdb.firebaseio.com/'  # URL de tu base de datos Firebase
})

# Ejemplo de cómo interactuar con la base de datos

# Referencia a la base de datos (por ejemplo, donde tienes los usuarios)
ref = db.reference('usuarios')

# Establecer un valor en la base de datos
ref.set({
    'alumnos': [
        {
            'nombre': 'Carlos Reyes',
            'edad': 28,
            'salario': 2304.54
        },
        {
            'nombre': 'Renzo Chipana',
            'edad': 19,
            'salario': 20.00
        }
    ]
})

# Obtener datos de la base de datos
alumnos = ref.get()
print(alumnos)
