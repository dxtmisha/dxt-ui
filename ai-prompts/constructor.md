# Руководство по созданию конструктора (Constructor) в dxt-ui

## Обзор архитектуры

Конструктор — это самодостаточный модуль для UI-компонента, расположенный в
`packages/constructor/src/constructors/<ComponentName>/`.

Каждый конструктор состоит из фиксированного набора файлов, которые в совокупности
описывают типизацию, логику, рендеринг и CSS-токены компонента.

Обязательная структура директории конструктора:

```
<ComponentName>/
  index.ts          — публичный реэкспорт всех сущностей
  props.ts          — типы пропсов (Token + Basic + итоговый Props + defaults)
  types.ts          — Components, Emits, Expose, Slots, Classes
  basicTypes.ts     — вспомогательные типы: ComponentInclude, PropsInclude для встраивания
  properties.json   — CSS-токены компонента (дизайн-система)
  style.scss        — точка входа для SCSS-стилей компонента
  <Name>.ts         — основной класс бизнес-логики
  <Name>Design.tsx  — класс-конструктор рендеринга (расширяет DesignConstructorAbstract)
  <Name>Include.ts  — (опционально) Include-класс для встраивания в другие компоненты
```

При необходимости допускаются дополнительные вспомогательные файлы:
`<Name>Abstract.ts`, `<Name>DesignAbstract.tsx`, внутренние sub-классы.

---

## Файл: props.ts

### Назначение
Содержит все типы свойств компонента и объект значений по умолчанию.

### Структура

```ts
// 1. Импорты базовых props из других конструкторов и типов
import type { LabelProps } from '../../types/labelTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { IconPropsBasic, IconTrailingPropsInclude } from '../Icon'

// 2. PropsToken — CSS-пропсы, управляющие токенами из properties.json.
//    Обязательно обрамляются системными метками — их обновляет автоматизация.
export type ButtonPropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  readonly?: boolean
  adaptive?: 'iconAlways' | 'block' | 'auto'
  // :type [!] System label / Системная метка
}

// 3. PropsBasic — основной тип. Собирается через пересечение (&) готовых Include-типов.
//    Может быть обобщённым (generic) для поддержки расширения дочерними конструкторами.
export type ButtonPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic
> = LabelProps
  & EnabledProps
  & IconTrailingPropsInclude<Icon>
  & {
    /** HTML tag for the button container / HTML-тег для контейнера кнопки */
    tag?: 'button' | 'a' | 'span' | string
    /** HTML type for the button element / HTML-тип для элемента кнопки */
    type?: 'button' | 'submit' | 'reset' | string
  }

// 4. Props — финальный тип: Basic + Token
export type ButtonProps = ButtonPropsBasic & ButtonPropsToken

// 5. Объект defaults — значения по умолчанию.
//    Содержимое между системными метками генерируется автоматически из properties.json.
export const defaultsButton = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
```

### Правила
- `PropsToken` содержит **только** те пропсы, для которых есть соответствующий ключ
  в `properties.json`. Эта секция управляется автоматикой — не менять вручную содержимое между метками.
- `PropsBasic` — основа для наследования. Дочерние конструкторы передают свои generic-параметры.
- Все комментарии к свойствам — двуязычные: `/** EN / RU */` в одну строку.

---

## Файл: types.ts

### Назначение
Описывает внешний контракт компонента: какие компоненты нужны, какие события,
что экспонируется, какие слоты, какие классы.

### Структура

```ts
import type { ConstrClass } from '@dxtmisha/functional'
import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'
import type { LabelSlots } from '../../types/labelTypes'
import type { IconComponentInclude } from '../Icon'
import type { ProgressComponentInclude } from '../Progress'
import type { RippleComponentInclude } from '../Ripple'

/**
 * Какие компоненты нужно подключить (передать в DesignConstructorAbstract) для работы.
 * Interface for describing which components need to be connected for work.
 */
export type ButtonComponents
  = IconComponentInclude
    & ProgressComponentInclude
    & RippleComponentInclude

/**
 * Доступные события компонента.
 * Type describing available events.
 */
export type ButtonEmits = EventClickEmits

/**
 * Экспонируемые свойства (defineExpose).
 * Type describing available properties to expose.
 */
export interface ButtonExpose extends EventClickExpose {
}

/**
 * Доступные слоты компонента.
 * Type describing available slots.
 */
export interface ButtonSlots extends LabelSlots {
}

/**
 * CSS-классы компонента. Всегда включает main: ConstrClass.
 * Остальные ключи — имена элементов-подклассов (без префикса компонента).
 * Type describing subclasses.
 */
export type ButtonClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  icon: string
  trailing: string
  loading: string
  // :classes [!] System label / Системная метка
}
```

### Правила
- `Components` — объединение (`&`) всех `ComponentInclude`-типов из подключаемых конструкторов.
- `Classes.main` — всегда `ConstrClass`, остальные ключи — всегда `string`.
- Содержимое `Classes` между системными метками генерируется автоматически.
- Слоты принимают аргументы только если передают данные (scoped slots).

---

## Файл: basicTypes.ts

### Назначение
Типы для встраивания этого конструктора в **другие** конструкторы через Include-паттерн.

### Структура

```ts
import type { ConstrBind } from '@dxtmisha/functional'
import type { ButtonPropsBasic } from './props'

/**
 * Набор компонентов, необходимых для подключения кнопки в родительский конструктор.
 * Interface describing the set of components required for the Button include.
 */
export type ButtonComponentInclude = {
  /** Button component configuration / Конфигурация компонента кнопки */
  button?: object
}

/**
 * Пропсы для встраивания кнопки внутрь другого компонента.
 * Type describing properties for embedding a Button component inside another component.
 */
export type ButtonPropsInclude<
  Button extends ButtonPropsBasic = ButtonPropsBasic
> = {
  /** Атрибуты, передаваемые напрямую в компонент кнопки / Bound attributes passed directly to the button component */
  buttonAttrs?: ConstrBind<Button>
}
```

### Правила
- `ComponentInclude` — добавляет ключ с именем компонента в нижнем регистре в объект `components`.
- `PropsInclude` — добавляет `<name>Attrs?: ConstrBind<Props>` для передачи атрибутов извне.
- Это файл для потребителей, а не для внутреннего использования.

---

## Файл: \<Name\>.ts — Основной класс логики

### Назначение
Инкапсулирует всю бизнес-логику компонента. Не занимается рендерингом.
Создаёт и хранит экземпляры всех Include-классов.

### Структура

```ts
import { type Ref, type ToRefs } from 'vue'
import { type ConstrClass, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

// Импорт Include-классов (из classes/ или других конструкторов)
import { LabelInclude } from '../../classes/LabelInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import type { AriaList } from '../../types/ariaTypes'
import type { ButtonComponents, ButtonEmits, ButtonSlots } from './types'
import type { ButtonPropsBasic } from './props'

/**
 * Класс Button для управления бизнес-логикой компонента кнопки.
 * Button class for managing the business logic of a button component.
 */
export class Button {
  // 1. Публичные readonly свойства — экземпляры Include-классов
  readonly label: LabelInclude
  readonly enabled: EnabledInclude
  readonly icon: IconTrailingInclude
  readonly progress: ProgressInclude
  readonly ripple: RippleInclude
  readonly skeleton: SkeletonInclude
  readonly event: EventClickInclude

  /**
   * @param props      входные данные / input data
   * @param refs       реактивные ссылки / reactive refs
   * @param element    DOM-элемент / input element
   * @param classDesign имя дизайна / design name
   * @param className  имя класса / class name
   * @param components компоненты / components object
   * @param slots      слоты / slots
   * @param emits      эмиты / emits function
   * @param constructors объект с перегружаемыми классами / overridable class constructors
   */
  constructor(
    protected readonly props: ButtonPropsBasic,
    protected readonly refs: ToRefs<ButtonPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ButtonComponents, ButtonPropsBasic>,
    protected readonly slots?: ButtonSlots,
    protected readonly emits?: ConstrEmit<ButtonEmits>,
    constructors: {
      EnabledConstructor?: typeof EnabledInclude
      EventConstructor?: typeof EventClickInclude
      IconConstructor?: typeof IconTrailingInclude
      LabelConstructor?: typeof LabelInclude
      ProgressConstructor?: typeof ProgressInclude
      RippleConstructor?: typeof RippleInclude
      SkeletonConstructor?: typeof SkeletonInclude
    } = {}
  ) {
    // 2. Деструктурируем constructors с дефолтными значениями (паттерн подстановки)
    const {
      EnabledConstructor = EnabledInclude,
      EventConstructor = EventClickInclude,
      IconConstructor = IconTrailingInclude,
      LabelConstructor = LabelInclude,
      ProgressConstructor = ProgressInclude,
      RippleConstructor = RippleInclude,
      SkeletonConstructor = SkeletonInclude
    } = constructors

    // 3. Инициализация Include-объектов в правильном порядке зависимостей
    this.progress = new ProgressConstructor(className, props, components, { circular: true })
    this.label = new LabelConstructor(props, className, undefined, slots)
    this.enabled = new EnabledConstructor(props, this.progress)
    this.icon = new IconConstructor(props, className, components)
    this.ripple = new RippleConstructor(className, components, this.enabled)
    this.skeleton = new SkeletonConstructor(props, classDesign, ['classBackground'])
    this.event = new EventConstructor(props, this.enabled, emits)
  }

  // 4. Геттеры — вычислимые свойства без побочных эффектов

  /** Имя тега / Tag name */
  get tag(): string {
    if (this.props.tag) return this.props.tag
    if (this.props.href) return 'a'
    return 'button'
  }

  /** ARIA-атрибуты / ARIA attributes */
  get aria(): AriaList { /* ... */ }

  /** Список событий / Event list */
  get eventList(): Record<string, any> { /* ... */ }

  /** Классы для root-элемента / Root element classes */
  get classes(): ConstrClass { /* ... */ }

  /** Атрибуты для привязки к root-элементу / Root element binds */
  get binds() { /* ... */ }

  // 5. Приватные/protected вспомогательные методы
  protected isTagNotButton(): boolean { /* ... */ }
}
```

### Правила
- Класс **НЕ** занимается рендерингом (никакого JSX/VNode/`h()`).
- Параметр `constructors` с объектом перегружаемых классов — **обязателен**. Это IoC-паттерн,
  позволяющий дочерним дизайн-системам подменять любой Include-класс.
- Порядок инициализации в конструкторе: сначала те, от которых зависят другие.
- Геттеры (`get tag`, `get aria`, `get classes`, `get binds`) — основной способ
  передачи данных в `Design`-класс.
- Все переменные экземпляра — `readonly`.

---

## Файл: \<Name\>Design.tsx — Класс рендеринга

### Назначение
Отвечает за создание VNode-дерева. Расширяет `DesignConstructorAbstract` из
`@dxtmisha/functional`. Реализует четыре обязательных метода: `initExpose`,
`initClasses`, `initStyles`, `initRender`.

### Структура

```tsx
import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Button } from './Button'
import type { ButtonPropsBasic } from './props'
import type {
  ButtonClasses, ButtonComponents,
  ButtonEmits, ButtonExpose, ButtonSlots
} from './types'

/**
 * Класс-конструктор ButtonDesign, отвечающий за сборку и рендеринг компонента кнопки.
 * ButtonDesign constructor class responsible for assembling and rendering the Button component.
 */
export class ButtonDesign<
  COMP extends ButtonComponents,
  EXPOSE extends ButtonExpose,
  CLASSES extends ButtonClasses,
  P extends ButtonPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,       // Тип корневого DOM-элемента / Root element type
  COMP,
  ButtonEmits,
  EXPOSE,
  ButtonSlots,
  CLASSES,
  P
> {
  protected readonly item: Button

  /**
   * @param name           имя класса / class name
   * @param props          свойства / properties
   * @param options        дополнительные параметры / additional options
   * @param ItemConstructor класс логики (по умолчанию Button) / logic class
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ButtonEmits, P>,
    ItemConstructor: typeof Button = Button
  ) {
    super(name, props, options)

    // Инициализируем объект логики, передавая все параметры из базового класса
    this.item = new ItemConstructor(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    )

    // ОБЯЗАТЕЛЬНО вызывать this.init() в конце конструктора!
    this.init()
  }

  /** Что экспонировать наружу (defineExpose) */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.event.expose
    } as EXPOSE
  }

  /**
   * Классы компонента.
   * main — всегда ConstrClass, получаем из item.classes.
   * Подклассы получаем через this.getSubClass('имя-элемента').
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        label: this.getSubClass('label'),
        icon: this.getSubClass('icon'),
        trailing: this.getSubClass('trailing'),
        loading: this.getSubClass('loading')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /** Кастомные инлайн-стили (обычно пустой объект) */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /** Рендеринг VNode-дерева компонента */
  protected initRender(): VNode {
    return h(
      this.item.tag,                    // Динамический тег (button / a / span)
      {
        ...this.item.binds,             // Атрибуты, события, aria
        ref: this.element,              // Ссылка на DOM-элемент
        class: this.classes?.value.main,
        style: this.styles?.value
      },
      [
        ...this.item.progress.render(),
        ...this.item.label.render(),
        ...this.item.icon.render(),
        ...this.item.ripple.render()
      ]
    )
  }
}
```

### Правила
- Всегда вызывать `this.init()` **последним** в конструкторе после инициализации `this.item`.
- `initRender()` может возвращать `VNode` **или** `VNode[]` в зависимости от компонента.
- Для рендеринга слотов используется `this.initSlot('slotName', undefined, props)`.
- `this.getSubClass('sub-name')` генерирует строку вида `ComponentName__sub-name`.
- `this.getAttrs()` возвращает атрибуты, переданные извне компонента (например, class, style).
- Для сложных компонентов с несколькими секциями (как FieldDesign) — выносить части
  рендеринга в отдельные `readonly` методы-стрелки: `readonly renderBody = (): VNode[] => {}`.

---

## Файл: \<Name\>Include.ts (опциональный)

### Назначение
Позволяет встраивать данный компонент внутрь другого через Include-паттерн.
Расширяет `ComponentIncludeAbstract`.

### Структура

```ts
import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ButtonPropsInclude } from './basicTypes'
import type { ButtonPropsBasic } from './props'
import type { ButtonExpose } from './types'

/**
 * Класс ButtonInclude для встраивания кнопки в другие компоненты.
 * ButtonInclude class for conditionally rendering button components within other components.
 */
export class ButtonInclude extends ComponentIncludeAbstract<
  ButtonPropsInclude,   // Тип пропсов Include / Include props type
  ButtonPropsBasic,     // Тип пропсов компонента / Component props type
  ButtonExpose,         // Тип expose / Expose type
  any                   // Тип слотов / Slots type
> {
  /** Имя компонента (совпадает с ключом в ComponentInclude) / Component name */
  protected override readonly name = 'button'

  /** Имя ключа для передачи raw-атрибутов / Key name for raw attributes */
  protected override readonly propsAttrsName = 'buttonAttrs'

  /** Нужно ли инициализировать ref на DOM-элемент / Whether to init element ref */
  protected readonly hasInitElement: boolean = false

  /** Условие отображения компонента / Display condition */
  override get is(): boolean {
    return (
      'label' in this.binds.value
      || 'icon' in this.binds.value
      || 'iconTrailing' in this.binds.value
    )
  }
}
```

### Правила
- `name` должно совпадать с ключом в типе `ComponentInclude` (в нижнем регистре).
- `propsAttrsName` — имя prop-а типа `ConstrBind<PropsBasic>` для передачи атрибутов.
- `is` — геттер, определяющий, нужно ли рендерить компонент.
- `render()` — метод базового класса, вызывает компонент через `this.components`.

---

## Файл: index.ts

### Назначение
Публичный реэкспорт всех сущностей конструктора. Всегда одинаковый формат.

```ts
export * from './Button'
export * from './ButtonDesign'
export * from './ButtonInclude'
export * from './props'
export * from './types'
export * from './basicTypes'
```

---

## Файл: properties.json

### Назначение
Описывает CSS-токены и состояния компонента в формате дизайн-системы.
Этот файл является источником истины для генерации SCSS-переменных и значений defaults.

### Структура

```json
{
  "padding": { "_type": "var" },
  "border-radius": "0",
  "transition-property": "background-color, border",
  "transition-duration": "{d.sys.transitionDuration.fade.enter}",
  "transition-function": "{d.sys.transitionFunction.standard}",

  "#label": {},
  "#icon": {},
  "#trailing": {},

  "focus": {},
  "hover": {
    "transition-duration": "{d.sys.transitionDuration.sm}"
  },
  "active": {
    "transition-duration": "{d.sys.transitionDuration.sm}"
  },
  "selected": { "_type": "state" },
  "readonly": { "_type": "state" },
  "disabled": {
    "transition-duration": "{d.sys.transitionDuration.sm}"
  },

  "~adaptive": {
    "~iconAlways": {
      "justify-content": "flex-start"
    },
    "~block": {
      "width": "100%"
    }
  },

  "~inverse": {},
  "~grid": {}
}
```

### Соглашения
- `#имя` — субэлемент (подкласс): генерирует `ComponentName__имя`.
- `~имя` — вариант/модификатор компонента (соответствует boolean/enum-пропсу).
- Ключи без `~` и `#` — состояния: `focus`, `hover`, `active`, `disabled`, `selected`, `readonly`.
- `_type: "var"` — CSS-переменная, значение задаётся дизайн-системой.
- `_type: "state"` — состояние, управляемое через CSS-класс.
- `{d.sys.*}` — ссылка на токен дизайн-системы.
- Медиа-группы: `_type: "media-group"`, `_type: "media-max-group"`.
- Контейнер-группы: `_type: "container-group"`, `_type: "container-max-group"`.

---

## Паттерн наследования конструкторов

Когда компонент является расширением другого (Select extends Input, Modal extends Window):

### 1. Абстрактный базовый класс логики (`<Name>Abstract.ts`)
```ts
export abstract class SelectAbstract {
  // Общая логика для всех вариантов Select
  readonly menu: MenuInclude
  readonly value: FieldValueInclude
  // ...

  protected constructor(/* те же параметры, что и у обычного класса */) {
    // Инициализация общих Include
  }
}
```

### 2. Конкретный класс (`<Name>.ts`)
```ts
export class Select extends SelectAbstract {
  readonly field: FieldInclude  // Дополнительные Include

  constructor(/* ..., constructors = {} */) {
    super(/* передаём всё родителю */)
    // Доинициализируем специфичное
    this.field = new FieldInclude(...)
  }
}
```

### 3. Абстрактный Design (`<Name>DesignAbstract.tsx`)
```ts
export abstract class ModalDesignAbstract<...> extends DesignConstructorAbstract<...> {
  protected readonly item: ITEM  // generic ITEM для возможности замены

  protected abstract initItem(ItemConstructor?: any): ITEM

  protected initRender(): VNode[] {
    // Общий рендеринг
  }
}
```

### 4. Конкретный Design (`<Name>Design.tsx`)
```ts
export class ModalDesign<...> extends ModalDesignAbstract<...> {
  protected initItem(Item?: typeof Modal): Modal {
    return new (Item ?? Modal)(
      this.props, this.refs, this.element,
      this.getDesign(), this.getName(),
      this.components, this.slots, this.emits
    )
  }

  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        title: this.getSubClass('title'),
        header: this.getSubClass('header'),
        body: this.getSubClass('body'),
        footer: this.getSubClass('footer')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }
}
```

---

## Паттерн Include-встраивания

Когда одному конструктору нужно **рендерить** другой как часть своего дерева:

### В классе логики (`MyComponent.ts`)
```ts
import { ButtonInclude } from '../Button'

export class MyComponent {
  readonly button: ButtonInclude  // ButtonInclude из basicTypes

  constructor(className, props, components, ...) {
    this.button = new ButtonInclude(
      className,
      props,
      components,
      () => ({
        // extra props, переданные сверх стандартных
        label: props.buttonLabel,
        icon: props.buttonIcon
      })
    )
  }
}
```

### В Design-классе (`MyComponentDesign.tsx`)
```tsx
protected initRender(): VNode {
  return h('div', { class: this.classes?.value.main }, [
    // Include сам решает, рендерить компонент или нет (через is)
    ...this.item.button.render()
  ])
}
```

### Типизация в basicTypes потребителя (`MyComponentBasicTypes.ts`)
```ts
import type { ButtonComponentInclude } from '../Button'
import type { ButtonPropsInclude } from '../Button'

export type MyComponentComponents = ButtonComponentInclude & { /* ... */ }
export type MyComponentPropsInclude = ButtonPropsInclude & { /* ... */ }
```

---

## Ключевые методы DesignConstructorAbstract

| Метод | Назначение |
|---|---|
| `this.getName()` | Имя компонента (kebab-case) |
| `this.getDesign()` | Имя дизайн-системы (префикс, напр. `d1`) |
| `this.getSubClass('el')` | Строка CSS-класса подэлемента: `ComponentName__el` |
| `this.getAttrs()` | Внешние атрибуты (class, style и т.д.) |
| `this.initSlot('name', fallback, props)` | Рендер именованного слота |
| `this.init()` | Финальная инициализация (ОБЯЗАТЕЛЬНО в конце конструктора) |
| `this.classes?.value.main` | Реактивное значение класса main |
| `this.styles?.value` | Реактивные инлайн-стили |
| `this.props` | Прокси входящих свойств |
| `this.refs` | Реактивные ToRefs входящих свойств |
| `this.element` | Ref<HTMLElement> корневого DOM-элемента |
| `this.components` | DesignComp для рендера дочерних компонентов |
| `this.slots` | Объект слотов |
| `this.emits` | Функция эмитов |

---

## Чеклист создания нового конструктора

```
[ ] Создана директория packages/constructor/src/constructors/<Name>/
[ ] props.ts: PropsToken + PropsBasic + Props + defaults (с системными метками)
[ ] types.ts: Components + Emits + Expose + Slots + Classes (с системными метками)
[ ] basicTypes.ts: ComponentInclude + PropsInclude для встраивания
[ ] properties.json: CSS-токены, состояния, субэлементы, модификаторы
[ ] style.scss: точка входа SCSS
[ ] <Name>.ts: класс логики с DI через constructors-объект, this.init() не нужен
[ ] <Name>Design.tsx: extends DesignConstructorAbstract, initExpose + initClasses + initStyles + initRender, this.init() в конце конструктора
[ ] <Name>Include.ts: если компонент встраивается в другие (опционально)
[ ] index.ts: экспорт всего
[ ] Зарегистрировать конструктор в главном index.ts пакета
```

---

## Документирование (TSDoc)

Все экспортируемые сущности документируются на двух языках:

```ts
/**
 * Основное описание на английском (первая строка).
 * Краткое описание на русском (вторая строка, обязательно).
 *
 * @param props     входные данные / input data
 * @param element   DOM-элемент / input element
 * @returns         результат / result
 */

// Интерфейсы и типы — однострочник:
/** HTML tag for the button container / HTML-тег для контейнера кнопки */
tag?: string
```

---

## Файл: style.scss

### Назначение
Точка входа для SCSS-стилей конструктора. Содержит mixin `mixin<ComponentName>`,
который подключается в дизайн-систему с нужными токенами.

### Структура

```scss
@use "@dxtmisha/styles/properties" as ui;

@mixin mixinButton {
  // Инициализация кастомных CSS-переменных из properties.json
  @include ui.initByCustom('padding', 0);
  @include ui.initByCustom('compressed', 1);

  // Базовые стили
  @include ui.flexInlineCenter;

  box-sizing: border-box;
  position: relative;

  // Состояния через миксины (НЕ пишем :hover напрямую)
  @include ui.hover {
    text-decoration: none;
  }

  @include ui.disabled {
    cursor: default;
  }

  @include ui.readonly {
    cursor: default;
  }

  // Подэлементы — имена совпадают с ключами #имя в properties.json
  &__label {
    order: 4;
    @include ui.paddingX(calc(ui.v('??padding') * ui.v('??compressed')));
  }

  &__icon,
  &__trailing {
    @include ui.marginLeft(calc(ui.v('??margin') * ui.v('??compressed')));
  }

  // Модификаторы — имена совпадают с ключами ~имя в properties.json
  &--icon {
    @include ui.initByCustom('padding', #{calc(var(--sys-height) / 2)});
  }

  &--grid {
    display: inline-grid;
  }

  &--inverse {
    --sys-color: unset !important;
  }
}
```

### SCSS-утилиты из `@dxtmisha/styles/properties`

| Функция / Mixin | Описание |
|---|---|
| `ui.v('токен')` | Получить значение CSS-переменной токена |
| `ui.v('??токен', fallback)` | С фолбэком (локальный токен компонента) |
| `ui.v('?токен')` | Токен дочернего/связанного компонента |
| `ui.n('компонент--класс')` | Имя класса с префиксом дизайна |
| `ui.initByCustom('ключ', значение)` | Инициализировать CSS-переменную |
| `ui.flexInlineCenter` | `display: inline-flex; align-items: center; justify-content: center` |
| `ui.flexCenter` | `display: flex; align-items: center; justify-content: center` |
| `ui.hover { ... }` | Стили для hover |
| `ui.disabled { ... }` | Стили для disabled |
| `ui.readonly { ... }` | Стили для readonly |
| `ui.focus { ... }` | Стили для focus |
| `ui.selected { ... }` | Стили для selected |
| `ui.truncate` | Обрезание текста с многоточием |
| `ui.paddingX(val)` | padding-left + padding-right |
| `ui.paddingY(val)` | padding-top + padding-bottom |
| `ui.marginLeft(val)` | margin-left с RTL-поддержкой |
| `ui.marginRight(val)` | margin-right с RTL-поддержкой |

### Правила
- **ЗАПРЕЩЕНО** писать `@media screen { ... }` напрямую — только `ui.mediaMinWidth(...)`.
- **ЗАПРЕЩЕНО** использовать жёсткие цвета (HEX, RGB) — только CSS-переменные.
- Имена `&__имя` должны **строго совпадать** с ключами `#имя` в `properties.json`.
- Имена `&--имя` должны **строго совпадать** с ключами `~имя` в `properties.json`.
- `??токен` — локальный токен этого компонента (из его `properties.json`).
- `?токен` — токен родительского/вложенного компонента.

---

## API объекта `this.components` (DesignComp)

`this.components` в Design-классе предоставляет методы для рендеринга дочерних компонентов.

```ts
// Рендер одного компонента (VNode | undefined)
this.components.renderOne(
  'icon',           // ключ из ComponentInclude
  { ...props },     // пропсы
  slots             // слоты (необязательно)
)

// Добавление компонента в массив children
this.components.renderAdd(
  children,          // целевой массив VNode[]
  'icon',            // ключ компонента
  { ...props },      // пропсы
  slots,             // слоты (необязательно)
  'unique-key'       // Vue-ключ (необязательно, для списков)
)

// Рендер нескольких компонентов (VNode[])
this.components.render('icon', { ...props }, slots)
```

### Пример (из FieldDesign — рендер иконок)
```tsx
readonly renderBodyScoreboardIcon = (): VNode[] => {
  const icons: any[] = [...this.item.icon.render()]

  if (this.item.icons.isCancel()) {
    this.components.renderAdd(icons, 'icon', this.item.icons.cancelBind, undefined, 'cancel')
  }

  if (this.item.icons.isArrow()) {
    this.components.renderAdd(icons, 'icon', this.item.icons.previousBind, undefined, 'previous')
    this.components.renderAdd(icons, 'icon', this.item.icons.nextBind, undefined, 'next')
  }

  return icons
}
```

### Пример (из SelectDesign — renderOne с приведением типа)
```tsx
return this.components.renderOne(
  'selectValue',
  toBinds(props.binds, {
    class: input.className,
    value: props.selectedList.value,
    multiple: this.props.multiple
  })
) as VNode
```

---

## Include-классы: справочник

### Базовые Include (`classes/`)

| Класс | Назначение |
|---|---|
| `LabelInclude` | label-текст и слот label |
| `EnabledInclude` | Состояния enabled/disabled/loading |
| `EventClickInclude` | Обработка click, keydown, href |
| `ModelInclude<T>` | Синхронизация v-model |
| `AriaStaticInclude` | Статические ARIA-атрибуты |
| `TextInclude` | Текстовое значение |
| `CaptionInclude` | Подпись (caption) к полю |
| `PrefixInclude` | Префикс поля |
| `SuffixInclude` | Суффикс поля |

### Include из конструкторов (`constructors/*/`)

| Класс | Источник | Назначение |
|---|---|---|
| `IconTrailingInclude` | `Icon` | Иконка + trailing-иконка |
| `ProgressInclude` | `Progress` | Индикатор загрузки |
| `RippleInclude` | `Ripple` | Ripple-эффект |
| `SkeletonInclude` | `Skeleton` | Скелетон загрузки |
| `ButtonInclude` | `Button` | Встраивание кнопки |
| `FieldInclude` | `Field` | Обёртка поля (Field-каркас) |
| `MenuInclude` | `Menu` | Выпадающее меню |
| `WindowInclude` | `Window` | Оверлей/окно |
| `BarsInclude` | `Bars` | Верхняя/нижняя панель |
| `ActionsInclude` | `Actions` | Кнопки действий |
| `MaskInclude` | `Mask` | Маска ввода |

### Field-специфичные Include (`classes/Field/`)

| Класс | Назначение |
|---|---|
| `FieldValueInclude` | Реактивное значение поля, expose |
| `FieldEventInclude` | onInput, onChange, onBlur, onClear |
| `FieldValidationInclude` | Валидация с expose |
| `FieldChangeInclude` | Отслеживание изменений |
| `FieldTypeInclude` | Тип input-поля |
| `FieldPatternInclude` | Паттерн ввода |
| `FieldAttributesInclude` | Атрибуты для `<input>` |
| `FieldElementInclude` | DOM-элемент поля |
| `FieldArrowInclude` | Стрелки (carousel/stepper) |
| `FieldVisibilityInclude` | Видимость (для пароля) |
| `FieldInputModeInclude` | inputmode атрибут |
| `FieldCodeInclude` | Ввод кода подтверждения |
| `FieldMatchInclude` | Совпадение значений (confirm-поле) |

---

## ModelInclude — реактивная синхронизация v-model

```ts
import { onMounted, ref, watch } from 'vue'
import { ModelInclude } from '../../classes/ModelInclude'

export class MyModal {
  readonly open = ref<boolean>(false)
  readonly model: ModelInclude<boolean>

  constructor(props, refs, ..., emits) {
    // 'open' — имя события ('update:open')
    this.model = new ModelInclude('open', emits, this.open)

    // Синхронизация внешнего prop → внутренний ref
    onMounted(() => {
      watch([refs.open], () => {
        this.open.value = Boolean(props.open)
      }, { immediate: true })
    })
  }
}
```

**Принцип:** `ModelInclude` автоматически вызывает `emits('update:open', value)` при
изменении `ref`. `watch` в `onMounted` обеспечивает одностороннюю синхронизацию prop → ref.

---

## Частые ошибки

### ❌ Забыть вызвать `this.init()` в конце конструктора Design-класса
```ts
// Неправильно
constructor(...) {
  super(name, props, options)
  this.item = new Button(...)
  // BUG: this.init() пропущен!
}

// Правильно
constructor(...) {
  super(name, props, options)
  this.item = new Button(...)
  this.init()  // ← всегда последним
}
```

### ❌ Инициализировать Include в неправильном порядке зависимостей
```ts
// Неправильно — enabled зависит от progress!
this.enabled = new EnabledInclude(props, this.progress)  // BUG: this.progress ещё undefined
this.progress = new ProgressInclude(...)

// Правильно — сначала то, от чего зависят другие
this.progress = new ProgressInclude(...)
this.enabled = new EnabledInclude(props, this.progress)
```

### ❌ Забыть системные метки в props.ts / types.ts
```ts
// Неправильно
export type MyPropsToken = { disabled?: boolean }

// Правильно — метки обязательны (даже если контент пустой)
export type MyPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  // :type [!] System label / Системная метка
}
```

### ❌ Рендерить VNode в классе логики (`<Name>.ts`)
```ts
// Неправильно — логика НЕ рендерит
export class Button {
  render() { return h('button', {}) }  // BUG!
}

// Правильно — рендеринг только в Design-классе
export class ButtonDesign extends DesignConstructorAbstract {
  protected initRender(): VNode { return h('button', {}) }
}
```

### ❌ Не передавать `constructors`-объект (нарушение IoC)
```ts
// Неправильно — нельзя переопределить класс в дизайн-системе
constructor(props, ...) {
  this.enabled = new EnabledInclude(props)
}

// Правильно — всегда через constructors-объект
constructor(props, ..., constructors: {
  EnabledConstructor?: typeof EnabledInclude
} = {}) {
  const { EnabledConstructor = EnabledInclude } = constructors
  this.enabled = new EnabledConstructor(props)
}
```

### ❌ Не экспортировать сущности через index.ts
```ts
// Правильно — index.ts экспортирует всё
export * from './Button'
export * from './ButtonDesign'
export * from './ButtonInclude'
export * from './props'
export * from './types'
export * from './basicTypes'
```

---

## Ключевые методы DesignConstructorAbstract

| Метод | Назначение |
|---|---|
| `this.getName()` | Имя компонента (kebab-case) |
| `this.getDesign()` | Имя дизайн-системы (префикс, напр. `d1`) |
| `this.getSubClass('el')` | CSS-класс подэлемента: `ComponentName__el` |
| `this.getAttrs()` | Внешние атрибуты (class, style и т.д.) |
| `this.initSlot('name', fallback, props)` | Рендер именованного слота |
| `this.init()` | Финальная инициализация (ОБЯЗАТЕЛЬНО в конце конструктора) |
| `this.classes?.value.main` | Реактивное значение класса main |
| `this.styles?.value` | Реактивные инлайн-стили |
| `this.props` | Прокси входящих свойств |
| `this.refs` | Реактивные ToRefs входящих свойств |
| `this.element` | `Ref<HTMLElement>` корневого DOM-элемента |
| `this.components` | DesignComp для рендера дочерних компонентов |
| `this.slots` | Объект слотов |
| `this.emits` | Функция эмитов |
