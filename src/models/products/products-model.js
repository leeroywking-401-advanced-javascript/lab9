'use strict';
/**
 *
 * @type {Model}
 */
const Model = require('../mongo.js');
const schema = require('./products-schema.js');


/**
 *
 *
 * @class Products
 * @extends {Model}
 */
class Products extends Model {
  /**
   *Creates an instance of Products.
   * @memberof Products
   */
  constructor() { super(schema); }
}

/**
 *
 * @type {Products}
 */
module.exports = Products;
