// export:none

import { FigmaApi } from '../FigmaApi'
import { PropertiesConfig } from '../Properties/PropertiesConfig.ts'

/**
 * Class for downloading and processing design assets from Figma API.
 * Serves as an abstraction for initializing SVG graphics and frame exports from specified Figma files.
 *
 * Класс для скачивания и обработки дизайн-ассетов из Figma API.
 * Служит абстракцией для инициализации SVG-графики и экспорта кадров из указанных файлов Figma.
 */
export class DesignFigma {
  /** Figma REST API client instance / Экземпляр клиента REST API Figma */
  protected readonly api: FigmaApi

  /**
   * Creates an instance of DesignFigma.
   *
   * Создает экземпляр DesignFigma.
   * @param fileKey unique Figma file identifier / уникальный идентификатор файла Figma
   * @param nodeId target node or frame identifier in Figma file / идентификатор целевого узла или кадра в файле Figma
   * @param token Figma API access token / токен доступа к API Figma
   */
  constructor(
    protected readonly fileKey: string,
    protected readonly nodeId?: string,
    protected readonly token: string = PropertiesConfig.getFigmaToken()
  ) {
    this.api = new FigmaApi(token, fileKey, nodeId)
  }

  /**
   * Executes the main workflow for retrieving and logging Figma design image assets.
   *
   * Выполняет основной процесс получения и логирования графических ассетов дизайна Figma.
   */
  async make(): Promise<void> {
    console.log('Design Figma', await this.initImage())
  }

  /**
   * Requests SVG image export URLs for the specified node from Figma API.
   *
   * Запрашивает URL-адреса экспорта SVG-изображений для указанного узла через API Figma.
   * @returns map of node IDs to SVG image URLs, or undefined on error / карта ID узлов к URL SVG-изображений или undefined в случае ошибки
   */
  async initImage(): Promise<Record<string, string> | undefined> {
    const image = await this.api.fileImages({
      ids: this.nodeId as string,
      format: 'svg',
      svg_outline_text: false,
      svg_include_id: true,
      svg_include_node_id: true
    })

    if (image?.err) {
      return undefined
    }

    return image?.images
  }
}
