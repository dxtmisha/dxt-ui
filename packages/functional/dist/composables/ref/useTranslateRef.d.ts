import { ShallowRef } from 'vue';
import { TranslateList } from '../../classes/Translate';
/**
 * Getting the translated text by an array of keys or a string with a key.
 *
 * Получение переведенного текста по массиву ключей или строке с ключом.
 * @param names a string or an array with keys/ строка или массив с ключами
 */
export declare function useTranslateRef<T extends string[]>(names: T): ShallowRef<TranslateList<T>>;
/**
 * Getting the translated text by an array of keys or a string with a key.
 *
 * Получение переведенного текста по массиву ключей или строке с ключом.
 * @param names a string or an array with keys/ строка или массив с ключами
 */
export declare const t: <T extends string[]>(names: T) => ShallowRef<TranslateList<T>>;
