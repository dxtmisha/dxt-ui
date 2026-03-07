import { Api, type ApiResponseItem } from '@dxtmisha/functional-basic'

import { responseDataPrefix } from './responseDataPrefix'

export const responseData: ApiResponseItem[] = [
  responseDataPrefix
]

Api
  .getResponse()
  .add(responseData)
