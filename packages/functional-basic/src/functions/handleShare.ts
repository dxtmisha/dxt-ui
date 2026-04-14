import { isShare } from './isShare'
import { ErrorCenter } from '../classes/ErrorCenter'

/**
 * The method invokes the native sharing mechanism of the device as part of the Web Share API.
 * If the Web Share API is not supported by the browser or the data cannot be shared, the method returns false.
 *
 * Метод вызывает встроенный механизм обмена данными мобильного устройства или операционной системы.
 * Если Web Share API не поддерживается браузером или данные не могут быть переданы, метод возвращает false.
 * @param data an object containing data to share/ объект, содержащий данные для обмена
 * @returns true if the data was shared successfully/ true, если данные были успешно переданы
 */
export async function handleShare(data: ShareData): Promise<boolean> {
  if (
    isShare()
    && navigator.canShare
    && navigator.canShare(data)
  ) {
    try {
      await navigator.share(data)
      return true
    } catch (error) {
      ErrorCenter.on({
        group: 'share',
        code: 'error',
        details: error
      })
    }
  }

  return false
}
