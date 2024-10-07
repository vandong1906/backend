const mysql = require('mysql');
const config = require('../configs/db.config');

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
module.exports = {
  query
}