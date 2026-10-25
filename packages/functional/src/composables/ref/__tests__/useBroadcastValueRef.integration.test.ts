/** @vitest-environment jsdom */
import { BroadcastChannel } from 'node:worker_threads'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { type EffectScope, nextTick } from 'vue'
import { ServerStorage } from '@dxtmisha/functional-basic'
import { useBroadcastValueRef } from '../useBroadcastValueRef'
import { useCookieRef } from '../useCookieRef'

const channels: BroadcastChannel[] = []
const scopes: EffectScope[] = []

/** Native channel tracked for test cleanup. / Нативный канал с отслеживанием для очистки теста. */
class TrackedBroadcastChannel extends BroadcastChannel {
  constructor(name: string) {
    super(name)
    channels.push(this)
  }
}

/** Saves the current tab's scope before creating another tab context. / Сохраняет область текущей вкладки перед созданием контекста другой вкладки. */
function createNextTabContext(): void {
  if (ServerStorage.has('__ui:effect-scope-global__')) {
    scopes.push(ServerStorage.get<EffectScope>('__ui:effect-scope-global__'))
  }
  ServerStorage.reset()
}

beforeEach(() => {
  ServerStorage.reset()
  vi.stubGlobal('BroadcastChannel', TrackedBroadcastChannel)
})

afterEach(() => {
  createNextTabContext()
  for (const scope of scopes.splice(0)) {
    scope.stop()
  }
  for (const channel of channels.splice(0)) {
    channel.close()
  }
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe('useBroadcastValueRef with native BroadcastChannel', () => {
  it('should transfer objects between two tab contexts without sending them back', async () => {
    const post = vi.spyOn(BroadcastChannel.prototype, 'postMessage')
    const first = useBroadcastValueRef<{ profile: { name: string } }>('native-object', { profile: { name: 'Initial' } })
    createNextTabContext()
    const second = useBroadcastValueRef<{ profile: { name: string } }>('native-object', { profile: { name: 'Initial' } })

    first.value = { profile: { name: 'Alice' } }
    await nextTick()
    await vi.waitFor(() => expect(second.value).toEqual({ profile: { name: 'Alice' } }))
    expect(post).toHaveBeenCalledTimes(1)

    second.value = { profile: { name: 'Bob' } }
    await nextTick()
    await vi.waitFor(() => expect(first.value).toEqual({ profile: { name: 'Bob' } }))
    expect(post).toHaveBeenCalledTimes(2)
  })

  it('should transfer cookie object values using the same broadcast transport', async () => {
    const post = vi.spyOn(BroadcastChannel.prototype, 'postMessage')
    const name = 'broadcast-object-cookie'
    const first = useCookieRef<{ theme: string }>(name, { theme: 'light' })
    createNextTabContext()
    const second = useCookieRef<{ theme: string }>(name, { theme: 'light' })

    try {
      first.value = { theme: 'dark' }
      await nextTick()
      await vi.waitFor(() => expect(second.value).toEqual({ theme: 'dark' }))
      expect(post).toHaveBeenCalledTimes(1)
    } finally {
      document.cookie = `${name}=; Max-Age=0; path=/`
    }
  })
})
