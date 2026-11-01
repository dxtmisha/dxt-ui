// md5:187c95dab4af53a2b2083e08407c0b6b
import { type ShallowRef } from 'vue';
/**
 * Returns the loading status and removes its listener when the current scope stops.
 * Without an active scope, the browser listener remains active for the page lifetime.
 * During SSR, only the initial status is read; no event listener is registered.
 *
 * Возвращает статус загрузки и удаляет слушатель при завершении текущей области эффектов.
 * Без активной области эффектов слушатель в браузере остаётся на всё время жизни страницы.
 * При SSR читается только начальный статус; слушатель событий не регистрируется.
 * @returns reactive loading status / реактивный статус загрузки
 */
export declare function useLoadingRef(): ShallowRef<boolean>;
