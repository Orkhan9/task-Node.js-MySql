const Sequelize=require('sequelize');

const sequelize = new Sequelize("taskMySql", "root", "", {
    dialect: "mysql",
    host: "localhost"
});

module.exports=sequelize;