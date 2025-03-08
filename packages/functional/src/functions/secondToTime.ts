import { toNumber } from './toNumber.ts'

/**
 * Converts seconds into a time string.
 *
 * Преобразовывает секунды в строку с временем.
 * @param second specified seconds/ указанные секунды
 */
export function secondToTime(second: number | string | undefined): string {
  const time = toNumber(second)

  if (time > 0) {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0')
    const seconds = String(time % 60).padStart(2, '0')

    return `${minutes}:${seconds}`
  }

  return '00:00'
}
