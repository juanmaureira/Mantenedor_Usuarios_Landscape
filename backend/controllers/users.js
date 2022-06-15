const {
  createUsers,
  getAllUsers,
  updateUsers,
  removeUsers,
  } = require("../model/users");
  
  const { httpMessages } = require("../common/utils");
  
  const getUsers = (req, res) => {
    const users = getAllUsers();
  console.log(users)
    if (!users.length) {
      res.status(200).json({
        message: httpMessages["noUsers"],
      });
    } else {
      res.status(200).json({
        message: users,
      });
    }
  };
  
  const setUsers = async (req, res) => {
    const attrs = req.body.users;
 
    const response = await createUsers(attrs);
  
    if (!response) {
      res.status(403).json({
        message: httpMessages["userExist"],
      });
    } else {
      res.status(200).json({
        response,
        message: httpMessages["created"],
      });
    }
  };
  
  const putUsers = async (req, res) => {
    let attrs = req.body.users;
    const id = req.params.id;

    if (attrs && id) {
      const response = await updateUsers(id, attrs);
      return res.status(200).json({
        response,
        message: httpMessages["reeplace"],
      });
    } else {
      res.status(403).json({
        message: httpMessages["missing"],
      });
    }
  };
  
  const deleteUsers = async (req, res) => {
    const id = req.params.id;
  
    if (id) {
      const [response] = await removeUsers(id);
  
      if (!response) {
        return res.status(422).json({
          message: httpMessages["userNotExist"],
        });
      } else {
        return res.status(200).json({
          response,
          message: httpMessages["deleted"],
        });
      }
    } else {
      return res.status(403).json({
        message: httpMessages["missing params"],
      });
    }
  };
  
 
  module.exports = {
    getUsers,
    setUsers,
    putUsers,
    deleteUsers,
  };