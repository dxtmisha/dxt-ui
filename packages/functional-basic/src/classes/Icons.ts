import { executeFunction } from '../functions/executeFunction'
import { forEach } from '../functions/forEach'
import { isString } from '../functions/isString'

/** Icon item type definition / Определение типа элемента иконки */
export type IconsItem = string | Promise<string | unknown> | (() => Promise<string | unknown>)
/** Icon configuration object / Объект конфигурации иконок */
export type IconsConfig = {
  /** URL to the icons storage / URL к хранилищу иконок */
  url?: string
  /** List of custom icons / Список пользовательских иконок */
  list?: Record<string, IconsItem>
}

const ICONS_WAIT = 120
const ICONS_LOAD = '--LOAD--'

/**
 * Class for managing icons.
 *
 * Класс для управления иконками.
 */
export class Icons {
  /** Registered icons map / Карта зарегистрированных иконок */
  protected static icons: Record<string, IconsItem> = {}
  /** Base icons storage URL / Базовый URL хранилища иконок */
  protected static url: string = '/icons/'

  /**
   * Checks if the given icon is in the list of connected icons.
   *
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name / название иконки
   * @returns true if icon exists / true, если иконка существует
   */
  static is(index: string): boolean {
    return index in this.icons || this.getName(index) in this.icons
  }

  /**
   * Returns the icon by the name.
   *
   * Возвращает иконку по названию.
   * @param index icon name / название иконки
   * @param url path to the storage location of the icon, if the icon does not exist / путь к месту хранения иконки, если иконка не существует
   * @param wait waiting time for picture loading (ms) / время ожидания загрузки картинки (мс)
   * @returns icon path or content / путь к иконке или контент
   */
  static async get(
    index: string,
    url = '',
    wait: number = 1000 * 60 * 3
  ): Promise<string> {
    const icon = this.getRaw(index, url)

    if (isString(icon)) {
      if (
        icon === ICONS_LOAD
        && wait > 0
      ) {
        await this.wait()
        return this.get(index, url, wait - ICONS_WAIT)
      }

      return icon === ICONS_LOAD ? '' : icon
    }

    const result = await executeFunction(icon) as string
    this.add(index, result)

    return result
  }

  /**
   * Returns the icon if it is already loaded or is a string.
   *
   * Возвращает иконку, если она уже загружена или является строкой.
   * @param index icon name / название иконки
   * @param url path to the storage location of the icon, if the icon does not exist / путь к месту хранения иконки, если иконка не существует
   * @returns icon path or content / путь к иконке или контент
   */
  static getAsync(
    index: string,
    url = ''
  ): string {
    const icon = this.getRaw(index, url)

    if (
      isString(icon)
      && icon !== ICONS_LOAD
    ) {
      return icon
    }

    return ''
  }

  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   * @returns list of icon names / список названий иконок
   */
  static getNameList(): string[] {
    return forEach(this.icons, (_, name) => {
      return name.replace(/^@/, '')
    })
  }

  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   * @returns string global link / глобальная ссылка
   */
  static getUrlGlobal(): string {
    return this.url
  }

  /**
   * Changes the configuration.
   *
   * Изменяет конфигурацию.
   * @param config new configuration / новая конфигурация
   */
  static setConfig(config: IconsConfig): void {
    if (config.url) {
      this.setUrl(config.url)
    }

    if (config.list) {
      this.addByList(config.list)
    }
  }

  /**
   * Changes the file path.
   *
   * Изменяет путь к файлу.
   * @param url new file path / новый путь к файлу
   */
  static setUrl(url: string): void {
    this.url = url
  }

  /**
   * Adding custom icons.
   *
   * Добавление пользовательских иконок.
   * @param index icon name / название иконки
   * @param file path to the file / путь к файлу
   */
  static add(index: string, file: IconsItem): void {
    this.icons[this.getName(index)] = file
  }

  /**
   * Adding an icon by the list.
   *
   * Добавление иконки по списку.
   * @param list list of icons / список иконки
   */
  static addByList(list: Record<string, IconsItem>): void {
    forEach(list, (file, index) => this.add(index, file))
  }

  /**
   * Adding custom global icons.
   *
   * Добавление пользовательских глобальных иконок.
   * @param index icon name / название иконки
   * @param file path to the file / путь к файлу
   */
  static addGlobal(index: string, file: string): void {
    this.icons[this.getName(index)] = `${this.getUrlGlobal()}${file}`
  }

  /**
   * Adding custom icons in loading mode.
   *
   * Добавление пользовательских иконок в режиме загрузки.
   * @param index icon name / название иконки
   */
  static addLoad(index: string): void {
    this.icons[this.getName(index)] = ICONS_LOAD
  }

  /**
   * Resets the icons registry.
   *
   * Сбрасывает реестр иконок.
   */
  static reset(): void {
    this.icons = {}
    this.url = '/icons/'
  }

  /**
   * Returns the icon name with the prefix.
   *
   * Возвращает название иконки с префиксом.
   * @param index icon name / название иконки
   * @returns icon name with prefix / название иконки с префиксом
   */
  protected static getName(index: string): string {
    return `@${index}`
  }

  /**
   * Returns the raw icon data by the name.
   *
   * Возвращает исходные данные иконки по названию.
   * @param index icon name / название иконки
   * @param url path to the storage location of the icon, if the icon does not exist / путь к месту хранения иконки, если иконка не существует
   * @returns icon path or content / путь к иконке или контент
   */
  protected static getRaw(index: string, url = ''): IconsItem {
    return this.icons?.[this.getName(index)]
      ?? this.icons?.[index]
      ?? `${index.replace(/^@/, url || this.url)}.svg`
  }

  /**
   * Script execution delay.
   *
   * Задержка выполнения скрипта.
   * @returns Promise<void> Promise for delay / Promise для задержки
   */
  protected static wait(): Promise<void> {
    return new Promise(resolve => setTimeout(() => resolve(), ICONS_WAIT))
  }
}
