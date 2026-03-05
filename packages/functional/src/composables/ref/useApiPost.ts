import { ApiMethodItem, type ApiData, type ApiFetch } from '@dxtmisha/functional-basic'

import type { ApiOptions } from '../../types/apiTypes'
import type { RefOrNormal } from '../../types/refTypes'
import { useApiRequest } from './useApiRequest'

export function useApiPost<
  T,
  Request extends ApiFetch['request'] = ApiFetch['request'],
  Return extends ApiData<T> = ApiData<T>
>(
  path?: RefOrNormal<string | undefined>,
  action?: (data: Return | undefined) => Promise<void> | void,
  transformation?: (data: T) => Return,
  toData: boolean = true,
  options?: ApiOptions
) {
  return useApiRequest<T, Request, Return>(
    path,
    ApiMethodItem.post,
    action,
    transformation,
    toData,
    options
  )
}
