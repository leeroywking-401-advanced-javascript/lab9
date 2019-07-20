'use strict';


class Model {
  /**
   *
   * @param schema
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   *
   *
   * @returns
   * @memberof Model
   */
  jsonSchema() {
    console.log(typeof this.schema.jsonSchema);
    return typeof this.schema.jsonSchema === 'function'
      ? this.schema.jsonSchema()
      : {};
  }


  /**
   *
   *
   * @param {*} _id
   * @returns
   * @memberof Model
   */
  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }


  /**
   *
   *
   * @param {*} record
   * @returns
   * @memberof Model
   */
  create(record) {
    console.log('r', record);
    let newRecord = new this.schema(record);
    console.log('n', newRecord);
    return newRecord.save();
  }


  /**
   *
   *
   * @param {*} _id
   * @param {*} record
   * @returns
   * @memberof Model
   */
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  /**
   *
   * @param _id
   * @returns {Query}
   */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

/**
 * 
 * @type {Model}
 */
module.exports = Model;
