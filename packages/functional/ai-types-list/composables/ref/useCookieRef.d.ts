// md5:cbaf0a5e758022f18bec4477f4e02ffd
import { type Ref } from 'vue';
import { type CookieOptions } from '@dxtmisha/functional-basic';
/**
 * Creates a reactive variable to manage cookies.
 * Changes, including nested objects and arrays, are persisted synchronously during SSR.
 * Browser writes are batched on the next Vue update cycle.
 *
 * Создает реактивную переменную для управления cookie.
 * Изменения, включая вложенные объекты и массивы, сохраняются синхронно при SSR.
 * В браузере записи объединяются в следующем цикле обновления Vue.
 * @param name cookie name / название cookie
 * @param defaultValue value or function to change data / значение или функция для изменения данных
 * @param options additional parameters / дополнительные параметры
 */
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;
