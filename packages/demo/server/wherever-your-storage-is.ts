// В твоем плагине или внутренней части библиотеки
import { AsyncLocalStorage } from 'node:async_hooks'
import { createContext } from 'unctx'

// Создаем хранилище для контекста
export const nitroStorage = new AsyncLocalStorage<Record<string, any>>()

// Создаем контекст.
// asyncContext: true позволяет unctx использовать AsyncLocalStorage под капотом.
export const myContext = createContext<Record<string, any>>({
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage
})
