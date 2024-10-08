const { Sequelize, DataTypes } = require('sequelize');
const db = require('../configs/db.config')
async function query(sql) {
  return new Promise((resolve, reject) => {
    const con = mysql.createConnection(config);
    con.connect(err => {
      if (err) return reject(err);
      con.query(sql, (err, result) => {
        con.end(); // Close the connection after the query
        if (err) return reject(err);
        resolve(result);
      });
    });
  });
}

async function getRows() {
  const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql'
  });
  const Sell = sequelize.define("sell", {
    name: DataTypes.STRING,
    money: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
  },
    {
      tableName: 'sell',
      timestamps: false
    });
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const row = await Sell.findAll();
    row.forEach(rows => {
      console.log(rows.dataValues); // Access dataValues for each instance
    });
    return { row }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  // try {

  //   const rows = await db.query('SELECT * FROM sell');
  //   console.log('successful', rows);
  //   return { rows };
  // } catch (error) {
  //   console.error('Error fetching rows:', error);
  //   throw error; // Rethrow the error for further handling if needed
  // }

}


async function getMultiple() {

  /*try {
    const rows = await db.query('SELECT * FROM sell');
    console.log('successful', rows);
    return {
      rows
    };
  } catch (error) {
    console.error('Error fetching rows:', error);
    throw error; // Rethrow the error for further handling if needed
  }*/
}

async function create(programmingLanguage) {
  const result = await db.query(
    `INSERT INTO programming_languages 
    (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
    VALUES 
    (?, ?, ?, ?, ?)`,
    [
      programmingLanguage.name, programmingLanguage.released_year,
      programmingLanguage.githut_rank, programmingLanguage.pypl_rank,
      programmingLanguage.tiobe_rank
    ]
  );

  let message = 'Error in creating programming language';

  if (result.affectedRows) {
    message = 'Programming language created successfully';
  }

  return { message };
}

async function update(id, programmingLanguage) {
  const result = await db.query(
    `UPDATE programming_languages 
    SET name=?, released_year=?, githut_rank=?, 
    pypl_rank=?, tiobe_rank=? 
    WHERE id=?`,
    [
      programmingLanguage.name, programmingLanguage.released_year,
      programmingLanguage.githut_rank, programmingLanguage.pypl_rank,
      programmingLanguage.tiobe_rank, id
    ]
  );

  let message = 'Error in updating programming language';

  if (result.affectedRows) {
    message = 'Programming language updated successfully';
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM programming_languages WHERE id=?`,
    [id]
  );

  let message = 'Error in deleting programming language';

  if (result.affectedRows) {
    message = 'Programming language deleted successfully';
  }

  return { message };
}

module.exports = {
  getRows,
  getMultiple,
  create,
  update,
  remove
}