import {
  FIGMA_API_URL,
  FigmaApiEndpoint,
  type FigmaFileImagesParams,
  type FigmaFileImagesResult,
  type FigmaFileNodesParams,
  type FigmaFileNodesResult,
  type FigmaFilesParams,
  type FigmaFilesResult,
  type FigmaFileStylesResult,
  type FigmaStylesResult
} from '../types/figmaApiTypes'

/**
 * Class for interacting with the Figma REST API.
 *
 * Класс для взаимодействия с Figma REST API.
 */
export class FigmaApi {
  constructor(
    protected token: string,
    protected fileKey: string,
    protected nodeId?: string
  ) {
  }

  /**
   * Retrieves file content via the files endpoint.
   *
   * Получает содержимое файла через эндпоинт files.
   * @param parameters query parameters / параметры запроса
   * @returns file content or undefined / содержимое файла или undefined
   */
  async files(parameters: FigmaFilesParams = {}): Promise<FigmaFilesResult | undefined> {
    return await this.fetch(FigmaApiEndpoint.files, parameters)
  }

  /**
   * Retrieves specific nodes from the file via the fileNodes endpoint.
   *
   * Получает конкретные узлы из файла через эндпоинт fileNodes.
   * @param parameters query parameters / параметры запроса
   * @returns node data or undefined / данные узлов или undefined
   */
  async fileNodes(parameters: FigmaFileNodesParams): Promise<FigmaFileNodesResult | undefined> {
    return await this.fetch(FigmaApiEndpoint.fileNodes, parameters)
  }

  /**
   * Retrieves images for the file.
   *
   * Получает изображения для файла.
   * @param parameters query parameters / параметры запроса
   * @returns image data or undefined / данные изображения или undefined
   */
  async fileImages(parameters: FigmaFileImagesParams): Promise<FigmaFileImagesResult | undefined> {
    return await this.fetch(FigmaApiEndpoint.fileImages, parameters)
  }

  /**
   * Retrieves specific nodes from the file via the fileStyles endpoint.
   *
   * Получает конкретные узлы из файла через эндпоинт fileStyles.
   * @returns file styles data or undefined / данные стилей файла или undefined
   */
  async fileStyles(): Promise<FigmaFileStylesResult | undefined> {
    return await this.fetch(FigmaApiEndpoint.fileStyles)
  }

  /**
   * Retrieves specific style by key via the styles endpoint.
   *
   * Получает конкретный стиль по ключу через эндпоинт styles.
   * @param key the style key / ключ стиля
   * @returns style data or undefined / данные стиля или undefined
   */
  async styles(key: string): Promise<FigmaStylesResult | undefined> {
    return await this.fetch(FigmaApiEndpoint.styles, undefined, key)
  }

  /**
   * Sets the API token.
   *
   * Устанавливает токен API.
   * @param token the API token / токен API
   * @returns this instance for chaining / этот экземпляр для цепочки вызовов
   */
  setToken(token: string): this {
    this.token = token
    return this
  }

  /**
   * Sets the file key.
   *
   * Устанавливает ключ файла.
   * @param fileKey the file key / ключ файла
   * @returns this instance for chaining / этот экземпляр для цепочки вызовов
   */
  setFileKey(fileKey: string): this {
    this.fileKey = fileKey
    return this
  }

  /**
   * Sets the node ID.
   *
   * Устанавливает ID узла.
   * @param nodeId the node ID (optional) / ID узла (необязательно)
   * @returns this instance for chaining / этот экземпляр для цепочки вызовов
   */
  setNodeId(nodeId?: string): this {
    this.nodeId = nodeId
    return this
  }

  /**
   * Constructs the request URL for the Figma API.
   *
   * Конструирует URL-адрес запроса для Figma API.
   * @param method the API endpoint method / метод конечной точки API
   * @param parameters additional parameters for the request / дополнительные параметры для запроса
   * @param key the key for specific endpoints (e.g., styles) / ключ для конкретных эндпоинтов (например, styles)
   * @returns the constructed URL / сконструированный URL
   */
  getUrl(
    method: FigmaApiEndpoint,
    parameters?: Record<string, any>,
    key?: string
  ) {
    const request = {}
    const endpoint = method
      .replace(':file_key', this.fileKey)
      .replace(':key', key ?? '')

    if (this.nodeId) {
      Object.assign(request, { 'node-id': this.nodeId })
    }

    if (parameters) {
      Object.assign(request, parameters)
    }

    console.log('request', request, Object.keys(request).length)

    const queryParams = Object.keys(request).length > 0
      ? `?${new URLSearchParams(request).toString()}`
      : ''

    return `${FIGMA_API_URL}${endpoint}${queryParams}`
  }

  /**
   * Generic fetch method for making API requests.
   *
   * Общий метод fetch для выполнения запросов к API.
   * @param method the API endpoint method / метод конечной точки API
   * @param parameters parameters for the request / параметры запроса
   * @param key the key for specific endpoints (e.g., styles) / ключ для конкретных эндпоинтов (например, styles)
   * @returns the response data or undefined / данные ответа или undefined
   */
  protected async fetch(
    method: FigmaApiEndpoint,
    parameters: Record<string, any> = {},
    key?: string
  ): Promise<any> {
    const url = this.getUrl(method, parameters, key)
    const headers = {
      'X-Figma-Token': this.token,
      'Content-Type': 'application/json'
    }

    console.log('url', url)

    const response = await fetch(url, {
      method: 'GET',
      headers
    })

    console.log('response', response.ok)

    if (response.ok) {
      return response.json()
    }

    console.error(`Error fetching Figma API: ${response.status} ${response.statusText}`)

    return undefined
  }
}
