import { FigmaApi } from '../FigmaApi'
import { PropertiesConfig } from '../Properties/PropertiesConfig.ts'

export class DesignFigma {
  protected readonly api: FigmaApi

  constructor(
    protected readonly fileKey: string,
    protected readonly nodeId?: string,
    protected readonly token: string = PropertiesConfig.getFigmaToken()
  ) {
    this.api = new FigmaApi(token, fileKey, nodeId)
  }

  async make(): Promise<void> {
    console.log('Design Figma', await this.initImage())
  }

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
