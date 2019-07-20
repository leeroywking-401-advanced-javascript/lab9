'use strict';
/**
 *
 * @type {Model}
 */
const Model = require('../mongo.js');
const schema = require('./categories-schema.js');

/**
 *
 *
 * @class Categories
 * @extends {Model}
 */
class Categories extends Model {
  constructor() { super(schema); }
}

/**
 *
 * @type {Categories}
 */
module.exports = Categories;
