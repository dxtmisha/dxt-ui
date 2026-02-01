export interface DescriptionSlots {
  /** Description slot/ Слот описания */
  description?(props: any): any
}

/**
 * Props for description functionality/ Пропсы для функциональности описания
 */
export type DescriptionProps = {
  /** Description text or number/ Текст или число описания */
  description?: string | number
  /** Description identifier/ Идентификатор описания */
  descriptionId?: string
}
