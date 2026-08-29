// md5:98867327bff8eecf3f8efe2b385fd4d9 true
import type { ApiData, ApiDataValidation, ApiErrorItem, ApiFetch, ApiInstance, ArrayToItem, FormattersListColumns, FormattersOptionsList, SearchColumns, SearchFormatList } from '@dxtmisha/functional-basic';
import type { ComputedRef, Ref } from 'vue';

/** Asynchronous reactive composable for API management requests with built-in SSR pre-fetching. @keywords api, management, ssr, crud, composable, fetch */
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