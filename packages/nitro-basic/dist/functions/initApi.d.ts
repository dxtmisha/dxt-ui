/**
 * Initializes the API client for the current request.
 * Sets the base origin to ensure correct absolute URLs for server-side requests.
 *
 * Инициализирует API-клиент для текущего запроса.
 * Устанавливает базовый источник (origin) для обеспечения корректных абсолютных URL-адресов при запросах на стороне сервера.
 * @param request incoming server request / входящий запрос сервера
 */
export declare function initApi(request: Request): void;
