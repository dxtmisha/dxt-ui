// md5:5fd98be4ebf63ae35c7667be0ff6adbc
import { TextIndex, TextList } from '../types/textTypes';
import { ShallowRef } from 'vue';
/**
 * TextIncludeInstance class for request-isolated text storage.
 *
 * Класс TextIncludeInstance для изолированного в рамках запроса хранения текстов.
 */
export declare class TextIncludeInstance {
    /** Global list of texts for all components / Глобальный список текстов для всех компонентов */
    readonly list: ShallowRef<TextList, TextList>;
    /**
     * Initialize global texts.
     *
     * Инициализация глобальных текстов.
     * @param texts List of texts / Список текстов
     */
    initText(texts: TextList): void;
    /**
     * Get text from global list.
     *
     * Получение текста из глобального списка.
     * @param index Text index / Индекс текста
     * @returns global text string / глобальная строка текста
     */
    getGlobalText(index: TextIndex): string | undefined;
}
