// md5:b43a71fe9d3b314a6c5f90aedd5d3879 true
import { SearchOptions } from '@dxtmisha/functional';

/** Type representing search properties for components and SearchInclude. @keywords search props include query columns options */
export type SearchPropsInclude<T = any> = {
    list?: T[];
    search?: string;
    searchColumns?: string[];
    searchOptions?: SearchOptions;
};