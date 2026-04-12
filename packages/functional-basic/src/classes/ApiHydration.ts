import { isDomRuntime } from '../functions/isDomRuntime'
import { ApiMethodItem, type ApiFetch, type ApiHydrationItem } from '../types/apiTypes'

export class ApiHydration {
  protected list: ApiHydrationItem[] = []

  toClient<T>(
    apiFetch: ApiFetch,
    response: T
  ): void {
    const {
      path,
      method = ApiMethodItem.get,
      request,
      global = method === ApiMethodItem.get
    } = apiFetch

    if (
      !global
      || !path
      || isDomRuntime()
    ) {
      return
    }

    this.list.push({
      path,
      method,
      request,
      response
    })
  }
}
