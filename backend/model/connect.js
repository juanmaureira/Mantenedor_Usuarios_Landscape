const low = require("lowdb");
const fileAsync = require("lowdb/adapters/FileAsync");

let db;

async function createConnection() {
  const adapter = new fileAsync("db.json");
  db = await low(adapter);
  db.defaults({
    users: [],
  }).write();
}

const getConnection = () => db;

const createData = (key, values) => db.get(`${key}`).push(values).write();
const existData = (key, value) => db.get(`${key}`).find(value).value();
const updateData = (key, id, value) =>
  db.get(`${key}`).find(id).assign(value).write();
const deleteData = (key, id) => db.get(`${key}`).remove(id).write();
const getAllData = (key) => db.get(`${key}`).value();


module.exports = {
  createConnection,
  getConnection,
  createData,
  existData,
  updateData,
  deleteData,
  getAllData,
};
