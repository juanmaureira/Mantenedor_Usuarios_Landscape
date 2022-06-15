require("dotenv").config();

const getEnvVars = (name) => {
  const val = process.env[name];

  if (!val) {
    throw "ERROR: ENV variable not set: " + name;
  }

  return val;
};

const httpMessages = {
  noUsers : "No hay usuarios para mostrar",
  created: "Usuario creado",
  noUsers: "No hay usuarios",
  userExist: "usuario ya existe",
  missing: "faltan parametros",
  userNotExist: "Usuario no existe",
  deleted: "Usuario eliminado"
}

module.exports = {
    getEnvVars,
    httpMessages
}