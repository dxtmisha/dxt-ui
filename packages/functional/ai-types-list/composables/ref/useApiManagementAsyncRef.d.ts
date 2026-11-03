// md5:729011f9db6b9040f02254d8b3f639f7 true
import type { ComputedRef, Ref } from 'vue';
import type {
  ApiData,
  ApiDataValidation,
  ApiErrorItem,
  ApiFetch,
  ApiInstance,
  ArrayToItem,
  FormattersListColumns,
  FormattersOptionsList,
  SearchColumns,
  SearchFormatList
} from '@dxtmisha/functional-basic';

/** Asynchronous reactive composable for API management requests with built-in SSR prefetching. @keywords api, management, ssr, composable, fetch */
export declare function useApiManagementAsyncRef<
  Return extends ApiManagementValue,
  FormattersOptions extends FormattersOptionsList,
  Post extends Record<string, any>,
  Put extends Record<string, any>,
  Delete extends Record<string, any>,
  Type extends ApiManagementValue = Return,
  Item extends ArrayToItem<Return> = ArrayToItem<Return>,
  ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number],
  Columns extends SearchColumns<ItemFormatters> = []
>(
  propsGet: ApiManagementGet<Return, Type>,
  formattersOptions?: FormattersOptions,
  searchOptions?: ApiManagementSearch<Item, Columns>,
  postRequest?: ApiManagementRequest<Post>,
  putRequest?: ApiManagementRequest<Put>,
  deleteRequest?: ApiManagementRequest<Delete>,
  action?: () => Promise<void> | void,
  actionSuccess?: () => Promise<void> | void,
  actionError?: () => Promise<void> | void,
  apiInstance?: ApiInstance
): {
  isValid: ComputedRef<boolean>;
  isResponseContractValid: ComputedRef<boolean>;
  responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
  list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
  readonly data: ComputedRef<ApiData<Return> | undefined>;
  errorItem: ComputedRef<ApiErrorItem | undefined>;
  readonly length: ComputedRef<number>;
  lengthData: ComputedRef<number>;
  starting: ComputedRef<boolean>;
  reading: Ref<boolean>;
  loading: Ref<boolean>;
  loadingSearch: Ref<boolean> | undefined;
  loadingPost: Ref<boolean> | undefined;
  loadingPut: Ref<boolean> | undefined;
  loadingDelete: Ref<boolean> | undefined;
  isSearch: ComputedRef<boolean> | undefined;
  search: Ref<string>;
  init: () => void;
  initSsr: () => void;
  reset: () => Promise<void>;
  abort: () => void;
  sendPost: (request?: ApiFetch['request']) => Promise<ApiData<Post> | undefined>;
  sendPut: (request?: ApiFetch['request']) => Promise<ApiData<Put> | undefined>;
  sendDelete: (request?: ApiFetch['request']) => Promise<ApiData<Delete> | undefined>;
};