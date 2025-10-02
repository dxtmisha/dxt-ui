/**
 * The object is used for matching text with a pattern.
 *
 * Конструктор создаёт объект регулярного выражения для сопоставления текста с шаблоном.
 * @param value test for replacement/ тест для замены
 * @param flags если определён, может принимать любую комбинацию нижеследующих значений:
 * g - глобальное сопоставление,
 * i - игнорирование регистра при сопоставлении
 * m - сопоставление по нескольким строкам.
 * @param pattern Regular expression text in which the value :value will be replaced with the optimized value of value/
 * Текст регулярного выражения, в котором значение :value заменится на оптимизированное значение value
 */
export function getExp(
  value: string,
  flags = 'ig',
  pattern = ':value'
): RegExp {
  const data = value.replace(/([[\]\\^$.?*+()/])/g, '\\$1')

  return new RegExp(pattern.replace(/:value/g, data), flags)
}
