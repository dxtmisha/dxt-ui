// md5:598bb6cb27e5e1113f4557b83b09fce9
/**
 * Slots for prefix functionality/ Слоты для функциональности префикса
 */
export interface PrefixSlots {
    /** Prefix slot/ Слот префикса */
    prefix?(props: any): any;
}
/**
 * Props for prefix functionality/ Пропсы для функциональности префикса
 */
export type PrefixProps = {
    /** Prefix text or number/ Текст или число префикса */
    prefix?: string | number;
    /** Unique identifier for the prefix element/ Уникальный идентификатор для элемента префикса */
    prefixId?: string;
};
