import { CmsDbTimestampAbstract } from './CmsDbTimestampAbstract'
import {
  type CmsDbItemData,
  type CmsDbUpdateValidator,
  type CmsIdTable,
  CmsSystemStatus
} from '../../types/cmsDbTypes'

/**
 * Abstract base class extending CmsDbTimestampAbstract with `systemStatus` management, lifecycle transitions, and default status population.
 *
 * Абстрактный базовый класс, расширяющий CmsDbTimestampAbstract управлением системным статусом `systemStatus`, переходами жизненного цикла и заполнением статуса по умолчанию.
 */
export abstract class CmsDbSystemStatusAbstract<
  TTable extends CmsIdTable = CmsIdTable,
  TData extends CmsDbItemData = CmsDbItemData,
  TFilled extends object = object
> extends CmsDbTimestampAbstract<
    TTable,
    TData,
    {
      getSystemStatus(): CmsSystemStatus
    } & TFilled
  > {
  /**
   * Returns the system status of the entity record from the local snapshot.
   *
   * Возвращает системный статус записи сущности из локального снимка данных.
   * @returns System status or undefined / Системный статус или undefined
   */
  getSystemStatus(): CmsSystemStatus | undefined {
    return this.data?.systemStatus
  }

  /**
   * Marks this entity as active (`systemStatus = 'active'`).
   *
   * Переводит запись в активный системный статус (`systemStatus = 'active'`).
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async activate(): Promise<this> {
    return this.updateSystemStatus(CmsSystemStatus.active)
  }

  /**
   * Marks this entity as blocked (`systemStatus = CmsSystemStatus.blocked`).
   *
   * Переводит запись в заблокированный системный статус (`systemStatus = CmsSystemStatus.blocked`).
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async block(): Promise<this> {
    return this.updateSystemStatus(CmsSystemStatus.blocked)
  }

  /**
   * Marks this entity as soft-deleted (`systemStatus = CmsSystemStatus.deleted`).
   *
   * Помечает запись как мягко удалённую (`systemStatus = CmsSystemStatus.deleted`).
   * @returns Current item instance / Текущий экземпляр сущности
   */
  async softDelete(): Promise<this> {
    return this.updateSystemStatus(CmsSystemStatus.deleted)
  }

  /**
   * Checks whether a value is a valid CMS system status (`'active'`, `'blocked'`, or `'deleted'`).
   *
   * Проверяет, является ли значение допустимым системным статусом CMS (`'active'`, `'blocked'` или `'deleted'`).
   * @param value Value to validate / Проверяемое значение
   * @returns True if the value is a valid system status / True, если значение является допустимым системным статусом
   */
  protected isSystemStatus(value: unknown): value is CmsSystemStatus {
    return Object.values(CmsSystemStatus).includes(value as CmsSystemStatus)
  }

  /**
   * Returns column validators including `systemStatus` validation for create payloads, defaulting invalid values to `CmsSystemStatus.active`.
   *
   * Возвращает валидаторы колонок для создания записи, подставляя `CmsSystemStatus.active` при недопустимом значении `systemStatus`.
   * @returns Column validator map / Карта валидаторов по имени колонки
   */
  protected override getCreateValidators(): Record<string, CmsDbUpdateValidator> {
    return {
      ...super.getCreateValidators(),
      systemStatus: value => (this.isSystemStatus(value) ? value : CmsSystemStatus.active)
    }
  }

  /**
   * Returns column validators including `systemStatus` validation for update payloads, omitting invalid values.
   *
   * Возвращает валидаторы колонок для обновления записи, исключая недопустимые значения `systemStatus`.
   * @returns Column validator map / Карта валидаторов по имени колонки
   */
  protected override getUpdateValidators(): Record<string, CmsDbUpdateValidator> {
    return {
      ...super.getUpdateValidators(),
      systemStatus: value => (this.isSystemStatus(value) ? value : undefined)
    }
  }

  /**
   * Updates the `systemStatus` of this entity record in the database through `update()` and refreshes the local snapshot.
   *
   * Обновляет `systemStatus` текущей записи в базе данных через метод `update()` и обновляет локальный снимок.
   * @param systemStatus Target system status / Целевой системный статус
   * @returns Current item instance / Текущий экземпляр сущности
   */
  private async updateSystemStatus(
    systemStatus: CmsSystemStatus
  ): Promise<this> {
    return this.setData({ systemStatus } as Partial<TData>)
      .update()
  }
}
