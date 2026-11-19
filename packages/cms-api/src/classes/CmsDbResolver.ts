import {
  ErrorCenterThrow,
  isPositiveInteger,
  uniqueArray
} from '@dxtmisha/functional-basic'

import { registerCmsErrorCauses } from '../functions/registerCmsErrorCauses'

/**
 * Static utility class for validating, resolving, and verifying CMS entity identifiers by IDs and unique codes.
 *
 * Статический вспомогательный класс для валидации, разрешения и проверки идентификаторов сущностей CMS по ID и уникальным кодам.
 */
export class CmsDbResolver {
  /**
   * Validates and verifies entity identifiers by their IDs using the provided lookup callback.
   *
   * Проверяет и подтверждает существование идентификаторов сущностей по их ID с помощью функции поиска.
   * @param errorGroup Error group / Группа ошибки
   * @param errorCode Error code reported when entities are invalid or missing / Код ошибки при невалидных или отсутствующих записях
   * @param fetchByIds Callback fetching persisted records matching given IDs / Функция выборки записей по ID
   * @param ids List of entity IDs / Список ID сущностей
   * @returns Deduplicated list of verified entity IDs / Уникальный список проверенных ID сущностей
   */
  static async resolveByIds(
    errorGroup: string,
    errorCode: string,
    fetchByIds: (ids: number[]) => Promise<Array<{ id: number }>>,
    ids?: readonly number[]
  ): Promise<number[]> {
    if (ids === undefined) {
      return []
    }

    const uniqueIds = uniqueArray(ids)
    for (const entityId of uniqueIds) {
      if (!isPositiveInteger(entityId)) {
        registerCmsErrorCauses()
        ErrorCenterThrow.on({
          group: errorGroup,
          code: errorCode,
          details: { id: entityId }
        })
      }
    }

    if (uniqueIds.length === 0) {
      return []
    }

    const persistedByIds = await fetchByIds(uniqueIds)
    const foundIdSet = new Set(persistedByIds.map(record => record.id))
    const missingIds = uniqueIds.filter(entityId => !foundIdSet.has(entityId))

    if (missingIds.length > 0) {
      registerCmsErrorCauses()
      ErrorCenterThrow.on({
        group: errorGroup,
        code: errorCode,
        details: { missingIds }
      })
    }

    return uniqueIds
  }

  /**
   * Resolves and verifies entity identifiers by their unique codes using the provided lookup callback.
   *
   * Разрешает и проверяет идентификаторы сущностей по их уникальным кодам с помощью функции поиска.
   * @param errorGroup Error group / Группа ошибки
   * @param errorCode Error code reported when entities are missing / Код ошибки при отсутствующих записях
   * @param fetchByCodes Callback fetching persisted records matching given codes / Функция выборки записей по кодам
   * @param codes List of entity codes / Список кодов сущностей
   * @returns Deduplicated list of resolved entity IDs / Уникальный список найденных ID сущностей
   */
  static async resolveByCodes(
    errorGroup: string,
    errorCode: string,
    fetchByCodes: (codes: string[]) => Promise<Array<{ id: number, code: string }>>,
    codes?: readonly string[]
  ): Promise<number[]> {
    if (codes === undefined) {
      return []
    }

    const uniqueCodes = uniqueArray(
      codes
        .map(code => code.trim())
        .filter(code => code.length > 0)
    )

    if (uniqueCodes.length === 0) {
      return []
    }

    const persistedByCodes = await fetchByCodes(uniqueCodes)
    const idByCode = new Map(persistedByCodes.map(record => [record.code, record.id]))
    const missingCodes = uniqueCodes.filter(code => !idByCode.has(code))

    if (missingCodes.length > 0) {
      registerCmsErrorCauses()
      ErrorCenterThrow.on({
        group: errorGroup,
        code: errorCode,
        details: { missingCodes }
      })
    }

    const resolvedIds: number[] = []
    for (const code of uniqueCodes) {
      const entityId = idByCode.get(code)
      if (entityId !== undefined) {
        resolvedIds.push(entityId)
      }
    }

    return uniqueArray(resolvedIds)
  }
}
