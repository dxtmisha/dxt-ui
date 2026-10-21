import { toNumber } from './toNumber'

/**
 * Converts seconds into a formatted time string (MM:SS or HH:MM:SS).
 *
 * Преобразовывает секунды в отформатированную строку времени (MM:SS или HH:MM:SS).
 * @param second specified seconds / указанные секунды
 * @param hasHour whether to force the hours format (HH:MM:SS) / нужно ли принудительно указывать часы (HH:MM:SS)
 * @returns formatted time string / форматированная строка с временем
 */
export function secondToTime(
  second: number | string | undefined,
  hasHour?: boolean
): string {
  const time = toNumber(second)

  if (time > 0) {
    const totalSeconds = Math.floor(time)
    const seconds = String(totalSeconds % 60).padStart(2, '0')
    const totalMinutes = Math.floor(totalSeconds / 60)

    if (hasHour) {
      const hours = String(Math.floor(totalMinutes / 60)).padStart(2, '0')
      const minutes = String(totalMinutes % 60).padStart(2, '0')

      return `${hours}:${minutes}:${seconds}`
    }

    const minutes = String(totalMinutes).padStart(2, '0')

    return `${minutes}:${seconds}`
  }

  return hasHour ? '00:00:00' : '00:00'
}
