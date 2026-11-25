import {
  eq,
  ilike,
  inArray,
  or,
  type SQL
} from 'drizzle-orm'
import { isString } from '@dxtmisha/functional-basic'

import { escapeCmsSearchPattern } from '../../functions/escapeCmsSearchPattern'
import { findRecords } from '../../functions/db/findRecords'
import { hasRecord } from '../../functions/db/hasRecord'
import { toCodes } from '../../functions/to/toCodes'
import { CmsDbManagerAbstract } from './CmsDbManagerAbstract'
import { CmsVerification } from '../CmsVerification'
import type { CmsDbCodeItemAbstract } from './CmsDbCodeItemAbstract'
import type {
  CmsCodeCreateInput,
  CmsCodeListOptions,
  CmsCodeTable,
  CmsCodeUpdateInput,
  CmsDbCodeItemData
} from '../../types/cmsDbTypes'

/**
 * Abstract base class for managers of code-addressable CMS entities providing code-based existence checks, single/batch code lookups, and search filtering across `code`, `name`, and `description`.
 *
 * Абстрактный базовый класс для менеджеров сущностей БД CMS с уникальным кодом, предоставляющий проверки существования и выборку по коду, а также текстовый поиск по полям `code`, `name` и `description`.
 */
export abstract class CmsDbCodeManagerAbstract<
  TTable extends CmsCodeTable = CmsCodeTable,
  TData extends CmsDbCodeItemData = CmsDbCodeItemData,
  TCreateInput extends object = CmsCodeCreateInput,
  TUpdateInput extends CmsCodeUpdateInput = CmsCodeUpdateInput,
  TItem extends CmsDbCodeItemAbstract<TTable, TData, TUpdateInput> = CmsDbCodeItemAbstract<TTable, TData, TUpdateInput>,
  TListOptions extends CmsCodeListOptions = CmsCodeListOptions
> extends CmsDbManagerAbstract<
    TTable,
    TData,
    TCreateInput,
    TUpdateInput,
    TItem,
    TListOptions
  > {
  /**
   * Checks whether a record exists by unique code.
   *
   * Проверяет существование записи по уникальному коду.
   * @param code Unique entity code / Уникальный код записи
   * @returns True if record exists / True, если запись существует
   */
  async hasByCode(code: string): Promise<boolean> {
    const whereCondition = this.getCodeCondition(code)

    if (!whereCondition) {
      return false
    }

    return hasRecord(
      this.databaseInstance.get(),
      this.getCodeTable(),
      whereCondition
    )
  }

  /**
   * Finds an entity wrapped in an item instance by unique code.
   *
   * Находит запись в обёртке экземпляра сущности по уникальному коду.
   * @param code Unique entity code / Уникальный код записи
   * @returns Wrapped entity item or undefined / Экземпляр обёртки записи или undefined
   */
  async getByCode(code: string): Promise<TItem | undefined> {
    const whereCondition = this.getCodeCondition(code)
    if (!whereCondition) {
      return undefined
    }

    const foundRecord = await this.fetchOneRecord(whereCondition)

    if (foundRecord) {
      return this.wrapItem(foundRecord)
    }

    return undefined
  }

  /**
   * Finds multiple entities wrapped in item instances by their unique codes.
   *
   * Находит список записей в обёртках экземпляров сущности по массиву уникальных кодов.
   * @param codes Unique entity codes / Уникальные коды записей
   * @returns List of wrapped entity items / Список найденных экземпляров обёртки
   */
  async getByCodes(codes: readonly string[]): Promise<TItem[]> {
    const validCodes = toCodes(codes)

    if (validCodes.length === 0) {
      return []
    }

    const codeTable = this.getCodeTable()

    return this.wrapItems(
      await findRecords<TTable['$inferSelect']>(
        this.databaseInstance.get(),
        codeTable,
        inArray(codeTable.code, validCodes)
      )
    )
  }

  /**
   * Builds a SQL equality predicate for a normalized entity code, or returns undefined if the code is invalid or blank.
   *
   * Формирует SQL-условие равенства для нормализованного кода сущности или возвращает undefined при невалидном или пустом коде.
   * @param code Unique entity code / Уникальный код записи
   * @returns SQL equality predicate or undefined / SQL-условие равенства или undefined
   */
  protected getCodeCondition(code: unknown): SQL | undefined {
    const trimmedCode = CmsVerification.normalizeCode(code, false)

    if (trimmedCode.length === 0) {
      return undefined
    }

    return eq(this.getCodeTable().code, trimmedCode)
  }

  /**
   * Returns the bound table typed as CmsCodeTable for shared code queries.
   *
   * Возвращает привязанную таблицу с типом CmsCodeTable для общих запросов по коду.
   * @returns Code-addressable CMS table schema / Схема таблицы CMS с уникальным кодом
   */
  protected getCodeTable(): CmsCodeTable {
    return this.table
  }

  /**
   * Builds SQL filter predicates for list queries, handling case-insensitive search across `code`, `name`, and `description`.
   *
   * Формирует список SQL-условий фильтрации для запросов списка, включая поиск без учёта регистра по `code`, `name` и `description`.
   * @param options Filtering options / Параметры фильтрации
   * @returns Array of SQL filter conditions / Массив SQL-условий фильтрации
   */
  protected override buildListConditions(options: TListOptions): SQL[] {
    const conditions = super.buildListConditions(options)
    const codeTable = this.getCodeTable()

    if (isString(options.search)) {
      const trimmedSearch = options.search.trim()

      if (trimmedSearch.length > 0) {
        const pattern = `%${escapeCmsSearchPattern(trimmedSearch)}%`
        const searchPredicate = or(
          ilike(codeTable.code, pattern),
          ilike(codeTable.name, pattern),
          ilike(codeTable.description, pattern)
        )

        if (searchPredicate) {
          conditions.push(searchPredicate)
        }
      }
    }

    return conditions
  }
}
