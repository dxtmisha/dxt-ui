import { toNumber } from './toNumber'

/**
 * Converts seconds into a time string.
 *
 * Преобразовывает секунды в строку с временем.
 * @param second specified seconds/ указанные секунды
 * @param hasHour whether to include hours/ нужно ли указывать часы
 * @returns string formatted time/ форматированная строка с временем
 */
export function secondToTime(
  second: number | string | undefined,
  hasHour?: boolean
): string {
  const time = toNumber(second)

  if (time > 0) {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0')
    const seconds = String(time % 60).padStart(2, '0')

    if (hasHour && Number(minutes) >= 60) {
      const hours = String(Math.floor(Number(minutes) / 60)).padStart(2, '0')
      const minutesHours = String(Number(minutes) % 60).padStart(2, '0')

      return `${hours}:${minutesHours}:${seconds}`
    }

    return `${minutes}:${seconds}`
  }

  return '00:00'
}
