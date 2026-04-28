/**
 * Slots for suffix functionality/ Слоты для функциональности суффикса
 */
export interface SuffixSlots {
    /** Suffix slot/ Слот суффикса */
    suffix?(props: any): any;
}
/**
 * Props for suffix functionality/ Пропсы для функциональности суффикса
 */
export type SuffixProps = {
    /** Suffix text or number/ Текст или число суффикса */
    suffix?: string | number;
    /** Unique identifier for the suffix element/ Уникальный идентификатор для элемента суффикса */
    suffixId?: string;
};
