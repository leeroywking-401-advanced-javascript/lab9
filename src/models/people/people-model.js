'use strict';
/**
 *
 * @type {Model}
 */
const DataModel = require('../memory.js');


/**
 *
 *
 * @class People
 * @extends {DataModel}
 */
class People extends DataModel {

  /**
   *
   * @returns {{firstName: {type: string, required: boolean}, lastName: {type: string, required: boolean}, id: {type: string, required: boolean}, age: {type: string, required: boolean}}}
   */
  schema() {
    return {
      id: { required: true, type: 'string' },
      firstName: { required: true, type: 'string' },
      lastName: { required: true, type: 'string' },
      age: { required: true, type: 'number' },
    };
  }

  /**
   *
   * @returns {{firstName: string, lastName: string, age: number}}
   */
  static sampleRecord() {
    return {
      'firstName': 'Test',
      'lastName': 'User',
      'age': 50,
    };
  }

}

module.exports = People;
