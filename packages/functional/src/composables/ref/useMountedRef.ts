import {
  getCurrentInstance,
  onMounted,
  onUnmounted,
  shallowRef,
  type ShallowRef
} from 'vue'

/**
 * Tracks whether the current Vue component instance is mounted on the client.
 * Starts as `false` during SSR and initial setup, becomes `true` after mount, and resets to `false` on unmount.
 *
 * Отслеживает, смонтирован ли текущий экземпляр компонента Vue на клиенте.
 * Начинается со значения `false` при SSR и начальной настройке, становится `true` после монтирования и сбрасывается в `false` при размонтировании.
 * @returns reactive mounted state / реактивное состояние монтирования
 */
export function useMountedRef(): ShallowRef<boolean> {
  const isMounted = shallowRef<boolean>(false)

  if (getCurrentInstance()) {
    onMounted(() => {
      isMounted.value = true
    })

    onUnmounted(() => {
      isMounted.value = false
    })
  }

  return isMounted
}
