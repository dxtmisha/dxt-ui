import {
  ErrorCenterThrow,
  hasKey
} from '@dxtmisha/functional-basic'

import { useCmsDb } from '../../composables/useCmsDb'
import type { CmsDbInstance } from '../CmsDbInstance'
import type { CmsIdTable } from '../../types/cmsDbTypes'

/**
 * Abstract base class providing unified CMS table binding, database instance management, and error handling.
 *
 * Абстрактный базовый класс для единой привязки таблицы CMS, управления экземпляром базы данных и обработки ошибок.
 */
export abstract class CmsDbAbstract<TTable extends CmsIdTable = CmsIdTable> {
  /** ErrorCenter group name for entity errors / Имя группы ошибок ErrorCenter для сущности */
  protected abstract readonly errorGroup: string

  /**
   * Initializes the base CMS database handler with a table schema and CmsDbInstance.
   *
   * Инициализирует базовый обработчик БД CMS со схемой таблицы и экземпляром CmsDbInstance.
   * @param table Drizzle PostgreSQL table schema with a required id column / Схема таблицы Drizzle PostgreSQL с обязательной колонкой id
   * @param databaseInstance CMS database instance manager / Менеджер экземпляра базы данных CMS
   */
  constructor(
    protected readonly table: TTable,
    protected readonly databaseInstance: CmsDbInstance = useCmsDb().cmsDbInstance
  ) {}

  /**
   * Checks whether the bound table defines a column with the specified name.
   *
   * Проверяет, содержит ли привязанная таблица колонку с указанным именем.
   * @param name Column property name / Имя свойства колонки
   * @returns True if the column exists on the table / True, если колонка существует в таблице
   */
  protected hasColumn(name: string): boolean {
    return hasKey(this.getBaseTable(), name)
  }

  /**
   * Returns the bound table typed as CmsIdTable for shared base queries.
   *
   * Возвращает привязанную таблицу с типом CmsIdTable для общих базовых запросов.
   * @returns Base CMS table schema / Базовая схема таблицы CMS
   */
  protected getBaseTable(): CmsIdTable {
    return this.table
  }

  /**
   * Wraps and throws an operational error through ErrorCenterThrow using the entity error group.
   *
   * Оборачивает и выбрасывает операционную ошибку через ErrorCenterThrow с группой ошибок сущности.
   * @param code Error code / Код ошибки
   * @param error Caught error instance / Перехваченное исключение
   * @returns Never returns (always throws) / Не возвращает управление (всегда выбрасывает ошибку)
   */
  protected handleError(code: string, error: unknown): never {
    return ErrorCenterThrow.handle(
      {
        group: this.errorGroup,
        code
      },
      error
    )
  }
}
