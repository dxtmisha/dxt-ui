// export:none

import { getColumn, isObjectNotArray } from '@dxtmisha/functional-basic'

import { PropertiesToAbstract } from './PropertiesToAbstract'

import { PropertyKey } from '../../../types/propertyTypes'

/**
 * Class for removing a property.
 *
 * Класс для удаления свойства.
 */
export class PropertiesToRemove extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '007-02-remove'

  protected init(): void {
    this.items.find(({ item }) => item?.[PropertyKey.remove] ?? false)
      .forEach(({
        name,
        parent,
        parents
      }) => {
        if (
          parent
          && isObjectNotArray(parent.value)
        ) {
          console.warn('[Remove]', `{${getColumn(parents, 'name').join('.')}.${name}}`)
          delete parent.value[name]
        }
      })
  }
}
