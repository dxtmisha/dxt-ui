import { forEach } from '../functions/forEach'
import { isFunction } from '../functions/isFunction'

import { Api } from './Api'

export type IconsItem = string | Promise<string | any> | (() => Promise<string | any>)
export type IconsConfig = {
  /** URL to the icons storage / URL к хранилищу иконок */
  url?: string
  /** List of custom icons / Список пользовательских иконок */
  list?: Record<string, IconsItem>
}

const ICONS_WAIT = 320
const ICONS_LOAD = '--LOAD--'
const ICONS_PROP = '__ui_icon_prop'

/**
 * Class for managing icons, supporting custom icon registration,
 * global path configuration, and asynchronous icon loading.
 *
 * Класс для управления иконками, поддерживающий регистрацию пользовательских иконок,
 * настройку глобальных путей и асинхронную загрузку иконок.
 */
export class Icons {
  /**
   * Default path to the icons storage.
   *
   * Путь по умолчанию к хранилищу иконок.
   */
  protected static url: string = '/icons/'

  /**
   * Checks if the given icon is in the list of connected icons.
   *
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name/ название иконки
   */
  static is(index: string): boolean {
    const icons = this.getIconsList()
    return index in icons || this.getName(index) in icons
  }

  /**
   * Returns the icon by the name.
   *
   * Возвращает иконку по названию.
   * @param index icon name/ название иконки
   * @param url path to the storage location of the icon, if the icon does not exist/
   * путь к месту хранения иконки, если иконка не существует
   * @param wait waiting time for picture loading (ms)/
   * время ожидания загрузки картинки (мс)
   * @returns icon path or content/ путь к иконке или контент
   */
  static async get(
    index: string,
    url = '',
    wait: number = 1000 * 60 * 3
  ): Promise<string> {
    const icon = this.getRaw(index, url)

    if (typeof icon === 'string') {
      if (
        icon === ICONS_LOAD
        && wait > 0
      ) {
        await this.wait()
        return this.get(index, url, wait - ICONS_WAIT)
      }

      return icon
    }

    if (isFunction(icon)) {
      return await icon()
    }

    return await icon
  }

  /**
   * Returns the icon if it is already loaded or is a string.
   *
   * Возвращает иконку, если она уже загружена или является строкой.
   * @param index icon name/ название иконки
   * @param url path to the storage location of the icon, if the icon does not exist/
   * путь к месту хранения иконки, если иконка не существует
   * @returns icon path or content/ путь к иконке или контент
   */
  static getAsync(
    index: string,
    url = ''
  ): string {
    const icon = this.getRaw(index, url)

    if (
      typeof icon === 'string'
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
   * @returns list of icon names/ список названий иконок
   */
  static getNameList(): string[] {
    return forEach(this.getIconsList(), (_, name) => {
      return name.replace(/^@/, '')
    })
  }

  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   * @returns string global link/ глобальная ссылка
   */
  static getUrlGlobal() {
    return `${Api.isLocalhost() ? '' : ''}${this.url}`
  }

  /**
   * Adding custom icons.
   *
   * Добавление пользовательских иконок.
   * @param index icon name/ название иконки
   * @param file path to the file/ путь к файлу
   */
  static add(index: string, file: IconsItem): void {
    this.getIconsList()[this.getName(index)] = file
  }

  /**
   * Adding custom icons in loading mode.
   *
   * Добавление пользовательских иконок в режиме загрузки.
   * @param index icon name/ название иконки
   */
  static addLoad(index: string): void {
    this.getIconsList()[this.getName(index)] = ICONS_LOAD
  }

  /**
   * Adding custom global icons.
   *
   * Добавление пользовательских глобальных иконок.
   * @param index icon name/ название иконки
   * @param file path to the file/ путь к файлу
   */
  static addGlobal(index: string, file: string): void {
    this.getIconsList()[this.getName(index)] = `${this.getUrlGlobal()}${file}`
  }

  /**
   * Adding an icon by the list.
   *
   * Добавление иконки по списку.
   * @param list list of icons/ список иконки
   */
  static addByList(list: Record<string, IconsItem>): void {
    forEach(list, (file, index) => this.add(index, file))
  }

  /**
   * Changes the file path.
   *
   * Изменяет путь к файлу.
   * @param url new file path/ новый путь к файлу
   */
  static setUrl(url: string): void {
    this.url = url
  }

  /**
   * Changes the configuration.
   *
   * Изменяет конфигурацию.
   * @param config new configuration/ новая конфигурация
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
   * Returns the icon name with the prefix.
   *
   * Возвращает название иконки с префиксом.
   * @param index icon name/ название иконки
   * @returns icon name with prefix/ название иконки с префиксом
   */
  protected static getName(index: string): string {
    return `@${index}`
  }

  /**
   * Returns the raw icon data by the name.
   *
   * Возвращает исходные данные иконки по названию.
   * @param index icon name/ название иконки
   * @param url path to the storage location of the icon, if the icon does not exist/
   * путь к месту хранения иконки, если иконка не существует
   * @returns icon path or content/ путь к иконке или контент
   */
  protected static getRaw(index: string, url = ''): IconsItem {
    const icons = this.getIconsList()

    return icons?.[this.getName(index)]
      ?? icons?.[index]
      ?? `${index.replace(/^@/, url || this.url)}.svg`
  }

  /**
   * Returns the shared icons list.
   * Ensures the storage object exists in the global scope.
   *
   * Возвращает общий список иконок.
   * Гарантирует, что объект хранилища существует в глобальной области видимости.
   * @returns record of icons/ объект с иконками
   */
  protected static getIconsList(): Record<string, IconsItem> {
    if (!(ICONS_PROP in globalThis)) {
      (globalThis as any)[ICONS_PROP] = {}
    }

    return (globalThis as any)[ICONS_PROP]
  }

  /**
   * Script execution delay.
   *
   * Задержка выполнения скрипта.
   * @returns Promise<void> Promise for delay/ Promise для задержки
   */
  protected static wait(): Promise<void> {
    return new Promise(resolve => setTimeout(() => resolve(), ICONS_WAIT))
  }
}
