const { Sequelize, DataTypes } = require('sequelize');
const db = require('../configs/db.config')

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


async function getRows() {
  

  try {
    
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const row = await Sell.findAll();
    const sells = [];
    row.forEach(rows => {
      console.log(rows.dataValues);
      sells.push(rows.dataValues)
    });
    return sells;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}
async function getMultiple() {

}

async function create(nguoiban) {
 
  await Sell.create({
    name: nguoiban.name,
    money: nguoiban.money,
    number: nguoiban.number,
  })
  const sells = await Sell.findAll();
  return sells;
}

async function update(id, programmingLanguage) {
}

async function remove(idSell) {

 const SellOne = await Sell.findOne({where:{id:idSell}});
 await SellOne.destroy();
    return await Sell.findAll()
}

module.exports = {
  getRows,
  create,
  update,
  remove
}