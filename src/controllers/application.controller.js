const {getRows}=require("../services/application.services")

const { application } = require("express");


async function get(req, res, next) {
  try {
 const db =await getRows();
    console.log(db);
    //console.log(data);
    res.send("hello word1");
  } catch (err) {
    console.error(`Error while getting application languages`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await applicationLanguages.create(req.body));
  } catch (err) {
    console.error(`Error while creating application language`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await applicationLanguages.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating application language`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await applicationLanguages.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting application language`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};