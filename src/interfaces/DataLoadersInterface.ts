import * as DataLoader from 'dataloader';

export interface DataLoaders {

  userLoader: DataLoader<number, any>
  postLoader: DataLoader<number, any>
}