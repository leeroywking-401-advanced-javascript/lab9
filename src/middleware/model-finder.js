'use strict';
/**
 *
 * @type {never}
 */
const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);
/**
 *
 * @type {string}
 */
const modelsFolder = `${__dirname}/../models`;
/**
 *
 * @param req
 * @param res
 * @param next
 */
const load = (req,res,next) => {
  let modelName = req.params.model.replace(/[^a-z0-9-_]/gi, '');
  const Model = require(`../models/${modelName}/${modelName}-model.js`);
  req.model = new Model();
  next();
};
/**
 *
 * @returns {Promise<T | void>}
 */
const list = () => {
  return readdir(modelsFolder)
    .then(contents =>
      contents.filter((entry) =>
        fs.lstatSync(`${modelsFolder}/${entry}`).isDirectory() && fs.statSync(`${modelsFolder}/${entry}/${entry}-model.js`)
      )
    )
    .catch(console.error);
};
/**
 *
 * @type {{load: load, list: (function(): Promise<T | void>)}}
 */
module.exports = {load,list};
