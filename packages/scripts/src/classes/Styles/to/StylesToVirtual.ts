// export:none

import { StylesTool } from '../StylesTool'
import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for processing data by property.
 *
 * Класс для обработки данных по свойству.
 */
export class StylesToVirtual extends StylesToAbstract {
  protected contentType = [
    'after',
    'before'
  ]

  protected treatment(): string[] {
    const name = this.getName()
    const data = [
      ...this.addEmptyString(),
      `&::${name} {`
    ]

    if (this.contentType.indexOf(name) !== -1) {
      data.push(`${StylesTool.getSpace()}content: ' ';`)
    }

    data.push(...this.content())
    data.push('}')

    return data
  }
}
