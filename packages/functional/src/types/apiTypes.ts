import type { ApiFetch, ApiMethodItem } from '@dxtmisha/functional-basic'
import type { RefOrNormal } from './refTypes'

/** Options for api requests/ Опции для запросов api */
export type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>
