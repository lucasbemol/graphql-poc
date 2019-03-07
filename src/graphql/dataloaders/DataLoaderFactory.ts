
import * as DataLoader from 'dataloader';
import { DataLoaders } from "../../interfaces/DataLoadersInterface";
import { UserLoader } from './UserLoader';
import { PostLoader } from './PostLoader';

export class DataLoaderFactory {

  constructor(
    private db: any
  ) {}

  getLoaders(): DataLoaders {
    return {
      userLoader: new DataLoader<number, any>(
        (ids: number[]) => UserLoader.batchUsers(ids)
      ),
      postLoader: new DataLoader<number, any>(
        (ids: number[]) => PostLoader.batchPosts(ids)
      )
    }
  }
}