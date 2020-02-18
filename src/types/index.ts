import FilterItem from '../FilterItem';

export type Filter = string | string[];
export type ModifyFilteredItems = (filterItems: FilterItem[]) => FilterItem[];
export type FilterizrState = 'IDLE' | 'FILTERING' | 'SORTING' | 'SHUFFLING';
export type Layout =
  | 'horizontal'
  | 'vertical'
  | 'sameHeight'
  | 'sameWidth'
  | 'sameSize'
  | 'packed';
