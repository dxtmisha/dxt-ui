import { definePlugin } from 'nitro'
import { provide, inject } from 'vue'

import { initBasic } from '@dxtmisha/nitro-basic'
import { ServerStorage } from '@dxtmisha/functional-basic'
import { nitroStorage } from '../wherever-your-storage-is.ts'

export default definePlugin((nitroApp) => {
  initBasic(nitroApp as any)

  nitroApp.hooks.hook('request', async (event) => {
    const userContext = getContext('user')
    console.log('nitroStorage 222', nitroStorage.getStore())
  })

  // Сохраняем оригинальный H3-handler
  const original = nitroApp.h3.handler

  // Оборачиваем его — теперь ВЕСЬ chain (middleware → routes → ответ)
  // выполняется внутри als.run(), контекст не теряется
  nitroApp.h3.handler = (req, res) => {
    return nitroStorage.run({ a: 's' }, () => original(req, res))
  }

  console.log('original', original)
})
