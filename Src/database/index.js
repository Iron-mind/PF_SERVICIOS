require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(`postgres://pqqlcomjtjsmtz:f8bb55862cd421469d351e8c59dd20203b0ed4bdfc217447f4cee69ca9ba8372@ec2-54-208-139-247.compute-1.amazonaws.com:5432/danbj5u31vf049?sslmode=no-verify`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialectOptions : {
      ssl : {
        require: true,
        rejectUnauthorized: false // <<<<<<< YOU NEED THIS
      }
    }
}
  // process.env.DB_NAME,
  // process.env.USER,
  // process.env.PASSWORD,
  // {
  //   dialect: "postgres",
  //   host: "localhost",
  //   logging: false,
  // }
);

module.exports = sequelize;
