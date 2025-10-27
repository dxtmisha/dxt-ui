import { Ref } from 'vue';
import { CookieOptions } from '@dxtmisha/functional-basic';
/**
 * Creates a reactive variable to manage cookies.
 *
 * Создает реактивную переменную для управления cookie.
 * @param name cookie name/ название cookie
 * @param defaultValue value or function to change data/ значение или функция для изменения данных
 * @param options additional parameters/ дополнительные параметры
 */
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;
