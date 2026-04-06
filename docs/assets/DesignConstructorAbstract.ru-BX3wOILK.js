import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Classes/DesignConstructorAbstract - Базовая логика конструктора`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designconstructorabstract`,children:`Класс DesignConstructorAbstract`}),`
`,(0,c.jsx)(n.p,{children:`Абстрактный базовый класс, предоставляющий стандартизированную структуру для логики конструктора компонентов. Он облегчает управление данными компонентов, стилями и модификациями на основе состояния.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизированная структура данных`}),` — обработка свойств, классов и стилей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с состоянием`}),` — реактивные обновления на основе состояния компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкие расширения`}),` — основа для создания специализированных конструкторов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignConstructorAbstract`}),` является абстрактным базовым классом и не может быть инициализирован напрямую. Он служит основой для создания конструкторов функциональных компонентов, объединяя управление стилями, классами, компонентами и рендерингом.`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsx)(n.p,{children:`Класс использует сложную систему дженериков для обеспечения полной типизации компонента:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`E extends Element`}),` — Тип корневого HTML-элемента (например, `,(0,c.jsx)(n.code,{children:`HTMLElement`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`COMP extends ConstrComponent`}),` — Список подключенных подкомпонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`EMITS extends ConstrItem`}),` — Типизация событий (emits), генерируемых компонентом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`EXPOSE extends ConstrItem`}),` — Структура данных, экспортируемых во внешнюю среду через `,(0,c.jsx)(n.code,{children:`expose`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`SLOTS extends ConstrItem`}),` — Доступные слоты компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`CLASSES extends ConstrClasses`}),` — Результирующий объект классов CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`P extends ConstrItem`}),` — Свойства (props) компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — базовое название компонента (используется для генерации имен классов и стилей).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: Readonly<P>`}),` — объект свойств компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ConstrOptions<COMP, EMITS, P>`}),` — дополнительные параметры (компоненты, модификации, обработчики событий, переопределения стилей и классов).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignConstructorAbstract } from '@dxtmisha/functional'

// 1. Определение интерфейсов компонента
interface MyProps { size?: 'small' | 'medium' }
interface MyClasses { main: { [key: string]: boolean } }

// 2. Реализация конструктора
class ButtonDesign extends DesignConstructorAbstract<
  HTMLButtonElement, // E
  {},                // COMP
  {},                // EMITS
  {},                // EXPOSE
  {},                // SLOTS
  MyClasses,         // CLASSES
  MyProps            // P
> {
  constructor(name: string, props: MyProps) {
    super(name, props)
    this.init()
  }

  // Обязательные методы для реализации
  protected initExpose() { return {} }
  protected initClasses() { return { main: { active: true } } }
  protected initStyles() { return {} }
  protected initRender() { return h('button', this.getAttrs(), this.slots.default?.()) }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы-жизненного-цикла-и-рендеринга`,children:`Методы жизненного цикла и рендеринга`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): this`}),` — Инициализирует экземпляр, подготавливает внутреннее состояние, классы и стили.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`render(): Function`}),` — Возвращает функцию рендеринга для использования в `,(0,c.jsx)(n.code,{children:`setup()`}),` Vue-компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setup(): void`}),` — Выполняет основную последовательность настройки логики компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`вспомогательные-методы-именования`,children:`Вспомогательные методы именования`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — Возвращает полное название компонента (например, `,(0,c.jsx)(n.code,{children:`button-large`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesign(): string`}),` — Возвращает базовое название дизайна (первая часть названия).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSubClass(name: string | string[]): string`}),` — Генерирует название класса для подэлемента (BEM: `,(0,c.jsx)(n.code,{children:`__`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatusClass(name: string | string[]): string`}),` — Генерирует название класса состояния (BEM: `,(0,c.jsx)(n.code,{children:`--`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStyle(name: string | string[]): string`}),` — Генерирует название системной CSS-переменной.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`данные-компонента`,children:`Данные компонента`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAttrs(): object`}),` — Возвращает атрибуты, исключая зарезервированные `,(0,c.jsx)(n.code,{children:`class`}),` и `,(0,c.jsx)(n.code,{children:`style`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`expose(): object`}),` — Возвращает данные и ссылки для экспорта через `,(0,c.jsx)(n.code,{children:`expose`}),` Vue.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};