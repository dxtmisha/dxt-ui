import { Ref } from 'vue';
/**
 * Creates a computed property that is computed on demand and cached.
 * The value is updated automatically when dependencies change, but only if it has been accessed at least once.
 * The watcher remains active throughout the life of the application.
 *
 * Создаёт вычисляемое свойство, которое вычисляется по требованию и кешируется.
 * Значение обновляется автоматически при изменении зависимостей, но только если к нему был осуществлён доступ хотя бы один раз.
 * Вотчер остаётся активным на протяжении работы всего приложения.
 *
 * @param getter A function that returns the value to be computed/
 * Функция, которая возвращает вычисляемое значение
 * @param initialState initial value of result/ начальное значение результата
 */
export declare function computedEternity<T>(getter: () => Promise<T> | T, initialState?: (() => T) | T): Ref<T, T>;
