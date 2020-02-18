import { BaseOptions } from './BaseOptions';
import { ModifyFilteredItems } from '../../types';

export interface RawOptions extends BaseOptions {
  filter?: string | string[];
  modifyFilteredItems?: ModifyFilteredItems;
}
