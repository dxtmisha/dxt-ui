/**
 * Pause execution for a specified number of milliseconds.
 *
 * Приостановить выполнение на указанное количество миллисекунд.
 * @param ms milliseconds/ миллисекунды
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
