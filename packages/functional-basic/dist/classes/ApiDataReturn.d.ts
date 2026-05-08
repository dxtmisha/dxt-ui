import { ApiStatus } from './ApiStatus';
import { ApiData, ApiFetch, ApiPreparationEnd } from '../types/apiTypes';
/**
 * Class for handling and processing data returned from an API request.
 *
 * Класс для обработки и подготовки данных, полученных в результате запроса к API.
 */
export declare class ApiDataReturn<T = any> {
    protected readonly apiFetch: ApiFetch;
    protected readonly query: Response;
    protected readonly end: ApiPreparationEnd;
    /**
     * Raw data received from the API/
     * Исходные данные, полученные от API
     */
    protected data?: ApiData<T>;
    /**
     * Processed data ready for use/
     * Обработанные данные, готовые к использованию
     */
    protected dataMod?: ApiData<T>;
    /**
     * Constructor for ApiDataReturn.
     *
     * Конструктор ApiDataReturn.
     * @param apiFetch API fetch configuration / конфигурация запроса API
     * @param query response object / объект ответа
     * @param end preparation end data / данные завершения подготовки
     */
    constructor(apiFetch: ApiFetch, query: Response, end: ApiPreparationEnd);
    /**
     * Initializes the class by reading data from the response.
     *
     * Инициализирует класс, считывая данные из ответа.
     */
    init(): Promise<this>;
    /**
     * Returns processed data.
     *
     * Возвращает обработанные данные.
     */
    get(): ApiData<T>;
    /**
     * Returns processed data along with the status object.
     *
     * Возвращает обработанные данные вместе с объектом статуса.
     * @param status API status instance / экземпляр статуса API
     */
    getAndStatus(status: ApiStatus): ApiData<T>;
    /**
     * Returns raw data received from the API.
     *
     * Возвращает исходные данные, полученные от API.
     */
    getData(): ApiData<T> | undefined;
    /**
     * Reads and parses data from the response.
     *
     * Считывает и анализирует данные из ответа.
     */
    protected readData<T>(): Promise<ApiData<T>>;
    /**
     * Prepares and formats the raw data.
     *
     * Подготавливает и форматирует исходные данные.
     */
    protected initData(): ApiData<T>;
    /**
     * Initializes the result item and merges metadata (success, status, code, message) from raw data.
     *
     * Инициализирует результирующий объект и переносит метаданные (success, status, code, message) из исходных данных.
     * @param data raw response data / исходные данные ответа
     * @returns initialized data with metadata / инициализированные данные с метаданными
     */
    protected initItem(data: Record<string, any>): ApiData<T>;
}
