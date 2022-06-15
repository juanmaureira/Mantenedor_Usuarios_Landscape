# API  Mantenedor_Usuarios_Landscape
Mantenedor de usuarios en una base de datos tipo json

## Development

Para correr el proyecto, instalar las dependencias de Node.js
```
$ npm install
```

## Correr la api 
```
En caso de no tener el db.json, el software lo creará automaticamente
```

cd /Mantenedor_Usuarios_Landscape/backend
$ npm run dev



Enviar datos a traves de postman, insomnia u otro software similar:


## Para crear un usuario


POST http://localhost:3000/users


BODY:

{
	"users":{
		"name" : "Juan",
		"lastname" : "Maureira",
		"email": "juanmaureira3@gmail.com"
	}
}


## Leer todos los usuarios

GET http://localhost:3000/users


## Actualizar a un usuario


PUT http://localhost:3000/users/${ID_USUARIO}

{
	"users":{
		"name": ${CAMBIAR_NOMBRE}
	}
}


## Borrar a un usuario

DELETE http://localhost:3000/users/${ID_USUARIO}
