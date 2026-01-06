/**
 * @param date: Date — объект даты, который необходимо отформатировать
 * @param locale: string — локаль форматирования (по умолчанию 'en-US')
 * @returns string — отформатированная строка даты
 */
export const formatDate = (date: Date, locale: string = 'en-US'): string => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}
