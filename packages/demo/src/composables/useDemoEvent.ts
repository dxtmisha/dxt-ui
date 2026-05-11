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
   */
  const onEvent = (event: string) => {
    eventName.value = event
    console.log(`Event: ${event}`)
  }

  return {
    eventName,
    onEvent
  }
}
