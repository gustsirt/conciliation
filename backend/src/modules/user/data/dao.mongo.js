import DaoMongo from "../../../libraries/customs/dao.mongo.js";
import dataModel from "./model.js";

export default class ThisDaoMongo extends DaoMongo{
  constructor() {
    super (dataModel);
  }
  
  get = async (filter = {}, excludePassword = true) => {
    let query = this.model.find(filter);
    if (excludePassword) {
      query = query.select('-password');
    }
    return await query.exec();
  };

  getBy = async (filter, excludePassword = true) => {
    let query = this.model.findOne(filter)
    if (excludePassword) {
      query = query.select('-password');
    }
    return await query.exec();
  }
}