import {
  type ConstrItems,
  DesignLogicAbstract,
  isFilled,
  removeTag
} from '@dxtmisha/functional'

import { BulletItemInclude } from '../BulletItem'

import type { BulletProps } from './props'
import type {
  BulletComponents,
  BulletEmits,
  BulletSlots
} from './types'

/** Forbidden executable or embedding HTML tags stripped with content / Запрещённые исполняемые и встраиваемые HTML-теги, удаляемые вместе с содержимым */
const FORBIDDEN_HTML_TAGS: string[] = [
  'script',
  'iframe',
  'object',
  'embed',
  'applet',
  'meta',
  'link',
  'base',
  'form',
  'style',
  'noscript'
]

/** Linear pattern matching HTML opening tags while respecting quoted attributes / Линейный шаблон открывающих HTML-тегов с учётом атрибутов в кавычках */
const HTML_OPEN_TAG_EXP = /<([a-z][a-z0-9-]*)((?:\s(?:[^>"']|"[^"]*"|'[^']*')*)?)(\/?)>/gi

/** Pattern matching inline DOM event handler attributes / Шаблон для удаления inline-обработчиков событий */
const INLINE_EVENT_ATTR_EXP = /\s+on[a-z0-9_-]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+)/gi

/** Pattern matching dangerous executable URI schemes in URL attributes / Шаблон опасных исполняемых URI-схем в URL-атрибутах */
const UNSAFE_URI_ATTR_EXP = /\s+(?:href|src|xlink:href|action|formaction)\s*=\s*(?:"\s*(?:javascript|vbscript|data\s*:\s*text\/html)[^"]*"|'\s*(?:javascript|vbscript|data\s*:\s*text\/html)[^']*'|\s*(?:javascript|vbscript|data\s*:\s*text\/html)[^\s"'=<>`]*)/gi

/** Pattern matching an existing class attribute on an `<li>` tag / Шаблон существующего атрибута class на теге `<li>` */
const CLASS_ATTR_EXP = /\bclass\s*=\s*(?:"([^"]*)"|'([^']*)')/i

/** Bullet dependency constructors type / Тип конструкторов зависимостей Bullet */
export type BulletConstructors = {
  /** BulletItem list include constructor / Конструктор подключения списка BulletItem */
  list: typeof BulletItemInclude
}

/**
 * Class representing the business logic and orchestrator of the Bullet component.
 * Coordinates `BulletItemInclude` list rendering and sanitized `<li>` HTML transformation.
 *
 * Класс, представляющий бизнес-логику и оркестратор компонента Bullet.
 * Координирует списочный рендеринг через `BulletItemInclude` и безопасную трансформацию HTML-разметки `<li>`.
 */
export class Bullet extends DesignLogicAbstract<
  HTMLUListElement,
  BulletComponents,
  BulletEmits,
  BulletSlots,
  BulletProps,
  BulletConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<BulletConstructors> = {
    list: {
      item: BulletItemInclude,
      canCreate: () => Boolean(BulletItemInclude.is(this.props) || isFilled(this.props.html)),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    }
  }

  /**
   * Returns sanitized HTML markup with `BulletItem` BEM classes injected into `<li>` elements.
   *
   * Возвращает санитизированную HTML-разметку с внедрением BEM-классов `BulletItem` в элементы `<li>`.
   * @returns processed HTML string or undefined / обработанная HTML-строка или undefined
   */
  getHtml(): string | undefined {
    if (!isFilled(this.props.html)) {
      return undefined
    }

    const classes = this.callInstance('list', item => item.getClasses(), '')
    const stripped = removeTag(this.props.html, {
      tag: FORBIDDEN_HTML_TAGS,
      removeContent: true
    })

    return stripped.replace(
      HTML_OPEN_TAG_EXP,
      (_match, tagName: string, rawAttrs: string, selfClosing: string) => {
        const cleanAttrs = rawAttrs
          .replace(INLINE_EVENT_ATTR_EXP, '')
          .replace(UNSAFE_URI_ATTR_EXP, '')

        if (tagName.toLowerCase() === 'li' && classes) {
          if (CLASS_ATTR_EXP.test(cleanAttrs)) {
            const mergedAttrs = cleanAttrs.replace(
              CLASS_ATTR_EXP,
              (_classMatch, doubleQuoted?: string, singleQuoted?: string) => {
                const existing = (doubleQuoted ?? singleQuoted ?? '').trim()
                return existing ? `class="${classes} ${existing}"` : `class="${classes}"`
              }
            )
            return `<${tagName}${mergedAttrs}${selfClosing}>`
          }

          return `<${tagName} class="${classes}"${cleanAttrs}${selfClosing}>`
        }

        return `<${tagName}${cleanAttrs}${selfClosing}>`
      }
    )
  }
}
