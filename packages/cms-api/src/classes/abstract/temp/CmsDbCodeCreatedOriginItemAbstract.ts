import { CmsDbCodeItemAbstract } from './CmsDbCodeItemAbstract'
import { CmsVerification } from '../../CmsVerification'
import type {
  CmsCodeCreatedOriginCreateInput,
  CmsCodeCreatedOriginInsertValues,
  CmsCodeCreatedOriginTable,
  CmsCodeCreatedOriginUpdateInput,
  CmsDbCodeCreatedOriginItemData,
  CmsDbUpdateValidator
} from '../../../types/cmsDbTypes'

/**
 * Abstract base class for code-addressable CMS entities tracking a `createdOrigin` field, providing shared getter, update validation, and create payload builder.
 *
 * Абстрактный базовый класс для сущностей БД CMS с уникальным кодом и полем `createdOrigin`, предоставляющий общий геттер, валидацию обновления и формирование данных вставки.
 */
export abstract class CmsDbCodeCreatedOriginItemAbstract<
  TTable extends CmsCodeCreatedOriginTable = CmsCodeCreatedOriginTable,
  TData extends CmsDbCodeCreatedOriginItemData = CmsDbCodeCreatedOriginItemData,
  TUpdateInput extends CmsCodeCreatedOriginUpdateInput = CmsCodeCreatedOriginUpdateInput
> extends CmsDbCodeItemAbstract<TTable, TData, TUpdateInput> {
  /**
   * Returns the creation origin code or null.
   *
   * Возвращает код источника создания записи или null.
   * @returns Creation origin code or null / Код источника создания или null
   */
  getCreatedOrigin(): string | null {
    return this.data.createdOrigin
  }

  /**
   * Returns a map of column value validators and normalizers including `createdOrigin`.
   *
   * Возвращает карту валидаторов и нормализаторов значений с учётом `createdOrigin`.
   * @returns Column validator map / Карта валидаторов по имени колонки
   */
  protected override getUpdateValidators(): Record<string, CmsDbUpdateValidator> {
    return {
      ...super.getUpdateValidators(),
      createdOrigin: value => CmsVerification.normalizeOptionalText(value)
    }
  }

  /**
   * Builds and validates database insert payload from create input including `createdOrigin`.
   *
   * Формирует и валидирует объект вставки в базу данных из входных данных создания записи с учётом `createdOrigin`.
   * @param input Entity creation payload / Входные данные для создания записи
   * @returns Validated Drizzle insert payload / Валидированные данные для вставки
   */
  static override buildCreateValues(
    input: CmsCodeCreatedOriginCreateInput
  ): CmsCodeCreatedOriginInsertValues {
    return {
      ...super.buildCreateValues(input),
      createdOrigin: CmsVerification.normalizeOptionalText(input.createdOrigin)
    }
  }
}
