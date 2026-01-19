import { Ref } from 'vue';
/**
 * Class for storing counts of entered characters for elastic ("rubber") groups.
 *
 * Класс для хранения количества введённых символов для «резиновых» групп.
 */
export declare class MaskRubberItem {
    /** Map: group name -> entered length/ Карта: имя группы -> введённая длина */
    protected readonly item: Ref<Record<string, number>, Record<string, number>>;
    /**
     * Checks whether group has a non‑zero stored length.
     *
     * Проверяет, есть ли у группы ненулевая длина.
     * @param groupName group name / название группы
     */
    is(groupName: string): boolean;
    /**
     * Returns stored length for group (0 if none).
     *
     * Возвращает сохранённую длину группы (0 если нет).
     * @param groupName group name / название группы
     */
    getByIndex(groupName: string): number;
    /**
     * Increments stored length for group by 1.
     *
     * Увеличивает сохранённую длину группы на 1.
     * @param groupName group name / название группы
     */
    add(groupName: string): this;
    /**
     * Decreases stored length for group by 1 (if > 0).
     *
     * Уменьшает сохранённую длину группы на 1 (если > 0).
     * @param groupName group name / название группы
     * @returns true if decreased / true если уменьшено
     */
    pop(groupName: string): boolean;
    /**
     * Resets all stored lengths.
     *
     * Сбрасывает все сохранённые длины.
     */
    reset(): this;
    /**
     * Expands mask by duplicating matched group placeholders according to stored lengths.
     *
     * Расширяет маску, дублируя плейсхолдеры групп по сохранённым длинам.
     * @param mask original mask / исходная маска
     */
    expandMask(mask: string): string;
}
