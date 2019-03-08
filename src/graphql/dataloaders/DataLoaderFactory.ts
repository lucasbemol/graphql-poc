
import * as DataLoader from 'dataloader';
import { DataLoaders } from "../../interfaces/DataLoadersInterface";
import { UserLoader } from './UserLoader';
import { PostLoader } from './PostLoader';
import { RequestedFields } from '../ast/RequestedFields';
import { DataLoaderParam } from '../../interfaces/DataLoaderParamInterface';

export class DataLoaderFactory {

  constructor(
    private db: any,
    private requestedFields: RequestedFields
  ) {}

  getLoaders(): DataLoaders {
    return {
      userLoader: new DataLoader<DataLoaderParam<number>, any>(
        (params: DataLoaderParam<number>[]) => UserLoader.batchUsers(params, this.requestedFields),
        { cacheKeyFn: (param: DataLoaderParam<number[]>) => param.key }
      ),
      postLoader: new DataLoader<DataLoaderParam<number>, any>(
        (params: DataLoaderParam<number>[]) => PostLoader.batchPosts(params, this.requestedFields),
        { cacheKeyFn: (param: DataLoaderParam<number[]>) => param.key }
      )
    }
  }
}