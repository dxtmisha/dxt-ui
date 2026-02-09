/**
 * Slots for caption functionality/ Слоты для функциональности заголовка
 */
export interface CaptionSlots {
    /** Caption slot/ Слот заголовка */
    caption?(props: any): any;
}
/**
 * Props for caption functionality/ Пропсы для функциональности заголовка
 */
export type CaptionProps = {
    /** Caption text or number/ Текст или число заголовка */
    caption?: string | number;
    /** Whether the caption is decorative/ Является ли подпись декоративной */
    captionDecorative?: boolean;
};
