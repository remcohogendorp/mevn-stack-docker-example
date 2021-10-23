const MONGO_IP = process.env.MONGO_IP || "mongo";
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DATABASE = (process.env.MONGO_DATABASE = "myapp");
const MONGO_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;

const FRONTEND_IP = process.env.FRONTEND_IP || "http://localhost";
const FRONTEND_PORT = process.env.FRONTEND_PORT || 4000;

const PORT = process.env.PORT || 5001;

export {
  FRONTEND_IP,
  FRONTEND_PORT,
  PORT,
  MONGO_IP,
  MONGO_PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_DATABASE,
};
