/**
 * Pause execution for a specified number of milliseconds.
 *
 * Приостановить выполнение на указанное количество миллисекунд.
 * @param ms milliseconds/ миллисекунды
 * @returns promise that resolves after delay/ промис, который разрешается после задержки
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
