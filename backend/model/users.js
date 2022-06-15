const {
    existData,
    createData,
    updateData,
    deleteData,
    getAllData,
  } = require("./connect");
  
  const { v4 } = require("uuid");

  const createUsers = (attrs) => {
    const params = { email: attrs.email };
    const userExist = existData("users", params);
    
    if (!userExist) {
      const value = {
        id: v4(),
        name: attrs.name,
        rut: attrs.rut,
        email: attrs.email,
      };
      createData("users", value);
      return existData("users", params);
    } else {
      return false;
    }
  };
  
  const getAllUsers = () => getAllData("users"); 
  const updateUsers = (id, attrs) => updateData("users", { id }, attrs);
  const removeUsers = (id) => deleteData("users", { id });
  
  module.exports = {
    createUsers,
    getAllUsers,
    updateUsers,
    removeUsers,
  };