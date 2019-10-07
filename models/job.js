const Sequelize = require("sequelize");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const { mysql } = require("config.json")("./config.json");

// DATABASE CONNECTION
const sequelize = new Sequelize(mysql.dbname, mysql.dbuser, mysql.dbpwd, {
  host: mysql.host,
  dialect: "mysql",
  operatorsAliases: false,
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

console.log("___________________________________________");

sequelize
  .authenticate()
  .then(() => console.log("connection using sequelize ok."))
  .catch(() => console.error("unable to connect to database: ", err));

const Job = sequelize.define("jobs", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },
  company: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  summary: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  website: {
    type: Sequelize.STRING
  },
  source: {
    type: Sequelize.STRING
  },
  postedDate: {
    type: Sequelize.STRING
  }
});

module.exports = Job;
