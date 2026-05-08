import {
  type ApiInstance,
  type ArrayToItem,
  type FormattersListColumns,
  type FormattersOptionsList,
  type SearchColumns
} from '@dxtmisha/functional-basic'

import { useApiManagementRef } from './useApiManagementRef'

import type {
  ApiManagementGet,
  ApiManagementRequest,
  ApiManagementSearch,
  ApiManagementValue
} from '../../types/apiTypes'

/**
 * Executes an API management request and immediately initializes it asynchronously.
 *
 * Выполняет запрос управления API и сразу инициализирует его асинхронно.
 * @template Return type of data returned by the API / тип данных, возвращаемых API
 * @template FormattersOptions optional formatting rules / опциональные правила форматирования
 * @template Post data type for POST creation request / тип данных для POST-запроса создания
 * @template Put data type for PUT update request / тип данных для PUT-запроса обновления
 * @template Delete data type for DELETE removal request / тип данных для DELETE-запроса удаления
 * @template Type original data type (before transformation) / тип исходных данных (до трансформации)
 * @template Item type of a single item in the data list / тип одного элемента из списка данных
 * @template ItemFormatters item type after formatters are applied / тип элемента после применения форматировщиков
 * @template Columns search columns derived from formatting / колонки, по которым производится поиск
 *
 * @param propsGet main GET request settings (path, reactivity, skeleton, etc.) / настройки главного GET-запроса
 * @param formattersOptions optional reactive formatting rules / правила для реактивного форматирования данных
 * @param searchOptions optional client-side search settings / настройки для клиентского поиска по списку
 * @param postRequest optional POST mutation settings / настройки для POST-запроса создания
 * @param putRequest optional PUT mutation settings / настройки для PUT-запроса обновления
 * @param deleteRequest optional DELETE mutation settings / настройки для DELETE-запроса удаления
 * @param action common callback executed after any successful mutation / общий коллбэк после любой успешной мутации
 * @param apiInstance API instance for requests (defaults to Api.getItem()) / экземпляр API для выполнения запроса
 */
export function useApiManagementAsyncRef<
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
) {
  const item = useApiManagementRef<
    Return,
    FormattersOptions,
    Post,
    Put,
    Delete,
    Type,
    Item,
    ItemFormatters,
    Columns
  >(
    propsGet,
    formattersOptions,
    searchOptions,
    postRequest,
    putRequest,
    deleteRequest,
    action,
    apiInstance
  )

  item.initSsr()

  return item
}
