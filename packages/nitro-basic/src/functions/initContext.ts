import { createContext } from 'unctx'
import { AsyncLocalStorage } from 'node:async_hooks'

/**
 * Asynchronous context container for SSR request handling /
 * Контейнер асинхронного контекста для обработки SSR-запросов
 */
export const appContext = /* #__PURE__ */ createContext({
  asyncContext: Boolean(AsyncLocalStorage),
  AsyncLocalStorage
})
