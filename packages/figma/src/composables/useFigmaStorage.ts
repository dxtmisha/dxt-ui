import { ref, type Ref, watch } from 'vue'
import { DataStorage, isDomRuntime } from '@dxtmisha/functional-basic'
import { EffectScopeGlobal } from '../classes/ref/EffectScopeGlobal'

export function useFigmaStorage<T>(
  name: string,
  defaultValue?: T | (() => T)
): Ref<T | undefined> {
  if (name in items) {
    return items[name] as Ref<T | undefined>
  }

  const storage = new DataStorage<T>(name)
  const item = ref<T | undefined>(storage.get(defaultValue, cache))

  EffectScopeGlobal.run(() => {
    watch(item, value => storage.set(value as T))
  })

  if (isDomRuntime()) {
    window.addEventListener('storage', () => {
      storage.update()
      item.value = storage.get()
    })
  }

  items[name] = item
  return item as Ref<T>
}

const items: Record<string, Ref<any>> = {}
