/**
 * Initializes the server-side storage for the application.
 *
 * This function sets up the global `ServerStorage` by providing a mechanism
 * to retrieve the storage object from the Vue application context using `inject`.
 * It looks for the `NITRO_APP_STORAGE` key.
 *
 * Инициализирует серверное хранилище для приложения.
 *
 * Эта функция настраивает глобальный `ServerStorage`, предоставляя механизм
 * для получения объекта хранилища из контекста приложения Vue с помощью `inject`.
 * Она ищет ключ `NITRO_APP_STORAGE`.
 */
export declare function uiServerStorage(): void;
