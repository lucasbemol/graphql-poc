import * as db from "../../db";

export class PostLoader {
  static batchPosts(ids): Promise<any[]> {
    return Promise.resolve(db.getAllPostsByIds(ids));
  }
}