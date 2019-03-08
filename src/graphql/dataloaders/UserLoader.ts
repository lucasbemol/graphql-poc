import * as db from "../../db";
import { DataLoaderParam } from "../../interfaces/DataLoaderParamInterface";
import { RequestedFields } from "../ast/RequestedFields";


export class UserLoader {

  static batchUsers(params: DataLoaderParam<number>[], requestedFields: RequestedFields): Promise<any[]> {
    let ids: number[] = params.map(param => param.key);
    // attributes = requestedFields.getFields(params[0].info)
    return Promise.resolve(db.getAllUsersByIds(ids));
  }
}