import * as db from "../../db";


export class UserLoader {

  static batchUsers(ids): Promise<any[]> {
    return Promise.resolve(db.getAllUsersByIds(ids));
  }
}