import { ref } from 'vue'

/**
 * Composable for handling event tracking in demo pages.
 *
 * Composable для обработки отслеживания событий на демо-страницах.
 */
export const useDemoEvent = () => {
  /** The name of the last triggered event/ Название последнего вызванного события */
  const eventName = ref('')

  /**
   * Handler for event triggering.
   *
   * Обработчик вызова события.
   * @param event event name/ название события
   * @param args optional event payloads/ необязательные значения события
   */
  const onEvent = (event: string, ...args: any[]) => {
    eventName.value = event
    console.log(`Event: ${event}`, ...args)
  }

  return {
    eventName,
    onEvent
  }
}
