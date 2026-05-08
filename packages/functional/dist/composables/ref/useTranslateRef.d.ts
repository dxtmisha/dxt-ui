import { ShallowRef } from 'vue';
import { TranslateInstance, TranslateList } from '@dxtmisha/functional-basic';
/**
 * Getting the translated text by an array of keys or a string with a key.
 *
 * It returns a `ShallowRef` that automatically updates when the global language changes.
 * Use `as const` for arrays to ensure proper TypeScript key inference.
 *
 * ---
 *
 * Получение переведенного текста по массиву ключей или пункту с ключом.
 *
 * Возвращает `ShallowRef`, который автоматически обновляется при смене глобального языка.
 * Используйте `as const` для массивов, чтобы обеспечить корректный вывод типов ключей в TypeScript.
 *
 * ### Examples / Примеры использования:
 * ```typescript
 * // 1. Using the main composable / Использование основного хука
 * const translations = useTranslateRef(['home.title', 'home.description'] as const);
 *
 * // 2. Using the shorthand 't' / Использование сокращения 't'
 * const labels = t(['button.save', 'button.cancel'] as const);
 * ```
 *
 * @param names a string or an array with keys / строка или массив с ключами
 * @param translateInstance a translate instance / экземпляр перевода
 */
export declare function useTranslateRef<T extends (string | string[])[]>(names: T, translateInstance?: TranslateInstance): ShallowRef<TranslateList<T>>;
/**
 * Shorthand for useTranslateRef.
 * Use `as const` for arrays to ensure proper TypeScript key inference.
 *
 * ---
 *
 * Сокращение для useTranslateRef.
 * Используйте `as const` для массивов, чтобы обеспечить корректный вывод типов ключей в TypeScript.
 *
 * @param names a string or an array with keys / строка или массив с ключами
 */
export declare const t: <T extends string[]>(names: T) => ShallowRef<TranslateList<T>>;
