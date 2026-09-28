import type { FieldFileValue } from '../../types/fieldTypes'

/** Counter display mode / Режим отображения счетчика */
export type InputImageCounterType = 'auto' | 'pixel' | 'size' | 'hide'

/**
 * Raw input item type, either structured file value, plain string, or undefined.
 *
 * Тип необработанного элемента ввода: структурированное значение файла, простая строка или undefined.
 */
export type InputImageItem = FieldFileValue | string | undefined
