/**
 * Slots for prefix functionality/ Слоты для функциональности префикса
 */
export interface PrefixSlots {
  /** Prefix slot/ Слот префикса */
  prefix?(props: any): any
}

/**
 * Props for prefix functionality/ Пропсы для функциональности префикса
 */
export type PrefixProps = {
  /** Prefix text or number/ Текст или число префикса */
  prefix?: string | number
}
