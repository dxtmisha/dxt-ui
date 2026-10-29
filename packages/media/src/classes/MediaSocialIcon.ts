import type {
  InputSocialIcons,
  InputSocialItem,
  InputSocialType,
  InputSocialTypeValue
} from '../types/socialTypes'

/**
 * Class for storing, managing, and resolving custom social network vector icons.
 * Maintains a prototype-isolated in-memory registry of custom icons,
 * provides fluent method chaining for registration and reset operations,
 * and enriches social network items with registered custom icons.
 *
 * Класс для хранения, управления и разрешения пользовательских векторных иконок социальных сетей.
 * Поддерживает изолированный от прототипа реестр кастомных иконок в памяти,
 * предоставляет цепочечные вызовы методов для регистрации и сброса,
 * а также обогащает элементы социальных сетей зарегистрированными кастомными иконками.
 */
export class MediaSocialIcon {
  /** Indicator whether custom icons are registered / Признак наличия зарегистрированных иконок */
  protected static hasCustomIcons: boolean = false

  /** Custom icons registry / Реестр кастомных иконок */
  protected static iconList: InputSocialIcons = /* #__PURE__ */ Object.create(null)

  /**
   * Protected constructor.
   *
   * Защищенный конструктор.
   */
  protected constructor() {}

  /**
   * Returns a dictionary of all registered custom icons.
   *
   * Возвращает словарь всех зарегистрированных кастомных иконок.
   * @returns readonly dictionary of custom icons / словарь кастомных иконок только для чтения
   */
  static get icons(): Readonly<InputSocialIcons> {
    return Object.assign(Object.create(null), this.iconList)
  }

  /**
   * Checks whether a custom icon is registered for the specified social network code.
   *
   * Проверяет, зарегистрирована ли кастомная иконка для указанного кода социальной сети.
   * @param code social network code / код социальной сети
   * @returns true if custom icon exists / true, если кастомная иконка существует
   */
  static has(code: InputSocialTypeValue): boolean {
    return Object.hasOwn(this.iconList, code)
  }

  /**
   * Returns a custom icon by social network code.
   *
   * Возвращает кастомную иконку по коду социальной сети.
   * @param code social network code / код социальной сети
   * @returns custom icon string or undefined / кастомная строка иконки или undefined
   */
  static get(code: InputSocialTypeValue): string | undefined {
    return Object.hasOwn(this.iconList, code) ? this.iconList[code as InputSocialType] : undefined
  }

  /**
   * Registers a custom icon for a specific social network.
   *
   * Регистрирует пользовательскую иконку для определенной социальной сети.
   * @param code social network code / код социальной сети
   * @param icon icon name or path / имя или путь к иконке
   * @returns class constructor for method chaining / конструктор класса для цепочечных вызовов
   */
  static add(code: InputSocialTypeValue, icon: string): typeof MediaSocialIcon {
    if (this.is(code, icon)) {
      this.iconList[code] = icon.trim()
      this.hasCustomIcons = true
    }

    return this
  }

  /**
   * Registers custom icons for multiple social networks.
   *
   * Регистрирует пользовательские иконки для нескольких социальных сетей.
   * @param icons dictionary of social network codes and their icons / словарь кодов социальных сетей и их иконок
   * @returns class constructor for method chaining / конструктор класса для цепочечных вызовов
   */
  static addList(icons: InputSocialIcons): typeof MediaSocialIcon {
    if (this.isList(icons)) {
      for (const [code, icon] of Object.entries(icons)) {
        if (icon) {
          this.add(code as InputSocialType, icon)
        }
      }
    }

    return this
  }

  /**
   * Removes a custom icon for the specified social network.
   *
   * Удаляет кастомную иконку для указанной социальной сети.
   * @param code social network code / код социальной сети
   * @returns true if icon was removed / true, если иконка была удалена
   */
  static remove(code: InputSocialTypeValue): boolean {
    if (Object.hasOwn(this.iconList, code)) {
      delete this.iconList[code]
      this.hasCustomIcons = this.isFilled()

      return true
    }

    return false
  }

  /**
   * Resets all registered custom icons.
   *
   * Сбрасывает все зарегистрированные пользовательские иконки.
   * @returns class constructor for method chaining / конструктор класса для цепочечных вызовов
   */
  static reset(): typeof MediaSocialIcon {
    this.iconList = Object.create(null)
    this.hasCustomIcons = false

    return this
  }

  /**
   * Applies custom icon to the social network item if registered.
   *
   * Применяет кастомную иконку к элементу социальной сети, если она зарегистрирована.
   * @param item social network item / элемент социальной сети
   * @returns social network item with custom icon applied / элемент социальной сети с примененной кастомной иконкой
   */
  static toItem<Mask = unknown>(item: InputSocialItem<Mask>): InputSocialItem<Mask> {
    if (
      this.hasCustomIcons
      && Object.hasOwn(this.iconList, item.code)
    ) {
      return {
        ...item,
        icon: this.iconList[item.code as InputSocialType]
      }
    }

    return { ...item }
  }

  /**
   * Checks whether the social network code and icon are valid for registration.
   *
   * Проверяет корректность кода социальной сети и иконки для регистрации.
   * @param code social network code / код социальной сети
   * @param icon icon name or path / имя или путь к иконке
   * @returns true if valid for registration / true, если данные корректны для регистрации
   */
  protected static is(
    code?: unknown,
    icon?: unknown
  ): boolean {
    return Boolean(
      typeof code === 'string'
      && code.trim()
      && code !== '__proto__'
      && code !== 'constructor'
      && code !== 'prototype'
      && typeof icon === 'string'
      && icon.trim()
    )
  }

  /**
   * Checks whether the custom icons registry contains any entries.
   *
   * Проверяет, содержит ли реестр кастомных иконок хотя бы одну запись.
   * @returns true if registry has icons / true, если в реестре есть иконки
   */
  protected static isFilled(): boolean {
    for (const _code in this.iconList) {
      return true
    }

    return false
  }

  /**
   * Checks whether the icons dictionary is valid for batch registration.
   *
   * Проверяет корректность словаря иконок для пакетной регистрации.
   * @param icons dictionary of social network codes and their icons / словарь кодов социальных сетей и их иконок
   * @returns true if valid dictionary / true, если словарь корректен
   */
  protected static isList(icons?: unknown): icons is InputSocialIcons {
    return Boolean(
      icons
      && typeof icons === 'object'
      && !Array.isArray(icons)
    )
  }
}
