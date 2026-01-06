/**
 * Генерирует случайную строку символов (ID) заданной длины.
 * @param {number} length - Длина генерируемой строки (по умолчанию 8).
 * @returns {string} - Сгенерированный идентификатор.
 */
export const generateId = (length: number = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}
