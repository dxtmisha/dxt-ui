import { createContext } from 'unctx'
import { AsyncLocalStorage } from 'node:async_hooks'

export const appContext = createContext({
  asyncContext: Boolean(AsyncLocalStorage),
  AsyncLocalStorage
})
