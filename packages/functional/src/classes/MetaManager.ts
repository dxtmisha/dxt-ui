import { createElement } from '../functions/createElement'
import { encodeAttribute } from '../functions/encodeAttribute'
import { forEach } from '../functions/forEach'
import { isDomRuntime } from '../functions/isDomRuntime'

type MetaList<T extends readonly string[]> = {
  [K in T[number]]?: string
}

/**
 * Class for working with meta tags.
 *
 * Класс для управления мета-тегами.
 */
export class MetaManager<
  T extends readonly string[],
  Key extends keyof MetaList<T> = keyof MetaList<T>
> {
  protected readonly items: MetaList<T> = {}

  /**
   * Creates an instance of MetaManager.
   *
   * Создает экземпляр MetaManager.
   * @param listMeta list of meta-tag names to manage / список имен мета-тегов для управления
   * @param isProperty use 'property' attribute instead of 'name' / использовать атрибут 'property' вместо 'name'
   */
  constructor(
    protected readonly listMeta: T,
    protected readonly isProperty: boolean = false
  ) {
    this.update()
  }

  /**
   * Returns the list of meta tag names.
   *
   * Возвращает список имен мета-тегов.
   */
  getListMeta(): T {
    return this.listMeta
  }

  /**
   * Get the content of a meta tag by name.
   *
   * Получает содержимое мета-тега по имени.
   * @param name meta tag name / имя мета-тега
   */
  get(name: Key): string {
    return this.items[name] ?? ''
  }

  /**
   * Returns all meta tags.
   *
   * Возвращает все мета-теги.
   */
  getItems(): MetaList<T> {
    return this.items
  }

  /**
   * Returns all meta tags as HTML string.
   *
   * Возвращает все мета-теги в виде HTML-строки.
   */
  html(): string {
    const code = forEach(
      this.listMeta as any,
      name => this.toHtmlString(name as any as Key)
    )

    return code.join('')
  }

  /**
   * Sets the content of a meta tag.
   *
   * Устанавливает содержимое мета-тега.
   * @param name meta tag name / имя мета-тега
   * @param content meta tag content / содержимое мета-тега
   */
  set(name: Key, content: string): this {
    this
      .setItem(name, content)
      .setMeta(name)

    return this
  }

  /**
   * Sets multiple meta tags from an object.
   *
   * Устанавливает несколько мета-тегов из объекта.
   * @param metaList object with meta tag names and content / объект с именами и содержимым мета-тегов
   */
  setByList(metaList: MetaList<T>): this {
    forEach(
      metaList,
      (content, name) =>
        this.set(name as any as Key, String(content))
    )

    return this
  }

  /**
   * Returns the attribute name for meta tags.
   *
   * Возвращает имя атрибута для мета-тегов.
   */
  protected getAttributeName(): string {
    return this.isProperty ? 'property' : 'name'
  }

  /**
   * Finds a meta element in the DOM.
   *
   * Находит мета-элемент в DOM.
   * @param name meta tag name / имя мета-тега
   */
  protected findMetaElement(name: string): HTMLMetaElement | undefined {
    if (!isDomRuntime()) {
      return undefined
    }

    const selector = `meta[${this.getAttributeName()}="${name}"]`

    return document.querySelector<HTMLMetaElement>(selector) || undefined
  }

  /**
   * Sets the content of a meta tag in internal storage.
   *
   * Устанавливает содержимое мета-тега во внутреннем хранилище.
   * @param name meta tag name / имя мета-тега
   * @param content meta tag content / содержимое мета-тега
   */
  protected setItem(name: Key, content: string): this {
    this.items[name] = content
    return this
  }

  /**
   * Sets or creates a meta tag in the DOM.
   *
   * Устанавливает или создает мета-тег в DOM.
   * @param name meta tag name / имя мета-тега
   */
  protected setMeta(name: Key): this {
    const element = this.findMetaElement(name)
    const content = this.items[name] ?? ''

    if (element) {
      element.content = content
    } else if (isDomRuntime()) {
      const options: Record<string, string> = { content }

      if (this.isProperty) {
        options.property = name
      } else {
        options.name = name
      }

      createElement(document.head, 'meta', options)
    }

    return this
  }

  /**
   * Converts meta tag to HTML string.
   *
   * Преобразует мета-тег в HTML-строку.
   * @param name meta tag name / имя мета-тега
   */
  protected toHtmlString(name: Key): string {
    const content = encodeAttribute(this.items[name] ?? '')
    return `<meta ${this.getAttributeName()}="${name}" content="${content}">`
  }

  /**
   * Updates meta tags data from the DOM.
   *
   * Обновляет данные мета-тегов из DOM.
   */
  protected update(): this {
    this.listMeta.forEach((name) => {
      this.items[name as any as Key] = this.findMetaElement(name)?.content ?? ''
    })

    return this
  }
}
