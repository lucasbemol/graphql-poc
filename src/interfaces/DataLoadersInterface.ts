import * as DataLoader from 'dataloader';
import { DataLoaderParam } from './DataLoaderParamInterface';

export interface DataLoaders {

  userLoader: DataLoader<DataLoaderParam<number>, any>
  postLoader: DataLoader<DataLoaderParam<number>, any>
}