const { getRows, create, remove } = require("../services/application.services")

async function get(req, res, next) {
  try {
    const db = await getRows();

    //console.log(data);
    res.json(db);
  } catch (err) {
    console.error(`Error while getting application languages`, err.message);
    next(err);
  }
}

async function createSell(req, res, next) {
  try {
    console.log('Received data:', req.body);
    res.json(await create(req.body));
  } catch (err) {
    console.error(`Error while creating application language`, err.message);
    next(err);
  }
}

async function update(req, res, next) {

}

async function remove1(req, res, next) {
  try {
    res.json(await remove(req.params.id));
  } catch (err) {
    console.error('Error while deleting sell:', err.message);
    res.status(404).send({ error: err.message });
  }

}

module.exports = {
  get,
  createSell,
  update,
  remove1
};