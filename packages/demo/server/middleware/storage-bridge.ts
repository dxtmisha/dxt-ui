// server/middleware/storage-bridge.ts
import { defineEventHandler } from 'h3'
import { nitroStorage } from '../wherever-your-storage-is'

export default defineEventHandler((event) => {
  // "Входим" в контекст этого запроса.
  // Весь код, вызванный внутри этого блока (включая асинхронный),
  // будет иметь доступ к этому event.context
  return nitroStorage.run(event, () => {
    console.log('nitroStorage', event)
    // Позволяем Nitro идти дальше по цепочке
  })
})
