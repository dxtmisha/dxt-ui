import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/functional/Classes/DesignConstructorAbstract - Базовая логика конструктора"}),`
`,n.jsx(e.h1,{id:"класс-designconstructorabstract",children:"Класс DesignConstructorAbstract"}),`
`,n.jsx(e.p,{children:"Абстрактный базовый класс, предоставляющий стандартизированную структуру для логики конструктора компонентов. Он облегчает управление данными компонентов, стилями и модификациями на основе состояния."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стандартизированная структура данных"})," — обработка свойств, классов и стилей."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с состоянием"})," — реактивные обновления на основе состояния компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гибкие расширения"})," — основа для создания специализированных конструкторов."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"DesignConstructorAbstract"})," является абстрактным базовым классом и не может быть инициализирован напрямую. Он служит основой для создания конструкторов функциональных компонентов, объединяя управление стилями, классами, компонентами и рендерингом."]}),`
`,n.jsx(e.h3,{id:"ограничения-дженериков-generic-constraints",children:"Ограничения дженериков (Generic Constraints)"}),`
`,n.jsx(e.p,{children:"Класс использует сложную систему дженериков для обеспечения полной типизации компонента:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"E extends Element"})," — Тип корневого HTML-элемента (например, ",n.jsx(e.code,{children:"HTMLElement"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"COMP extends ConstrComponent"})," — Список подключенных подкомпонентов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"EMITS extends ConstrItem"})," — Типизация событий (emits), генерируемых компонентом."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"EXPOSE extends ConstrItem"})," — Структура данных, экспортируемых во внешнюю среду через ",n.jsx(e.code,{children:"expose"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"SLOTS extends ConstrItem"})," — Доступные слоты компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CLASSES extends ConstrClasses"})," — Результирующий объект классов CSS."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"P extends ConstrItem"})," — Свойства (props) компонента."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры конструктора:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — базовое название компонента (используется для генерации имен классов и стилей)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"props: Readonly<P>"})," — объект свойств компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: ConstrOptions<COMP, EMITS, P>"})," — дополнительные параметры (компоненты, модификации, обработчики событий, переопределения стилей и классов)."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { DesignConstructorAbstract } from '@dxtmisha/functional'

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
`,n.jsx(e.h2,{id:"методы-жизненного-цикла-и-рендеринга",children:"Методы жизненного цикла и рендеринга"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"init(): this"})," — Инициализирует экземпляр, подготавливает внутреннее состояние, классы и стили."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"render(): Function"})," — Возвращает функцию рендеринга для использования в ",n.jsx(e.code,{children:"setup()"})," Vue-компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setup(): void"})," — Выполняет основную последовательность настройки логики компонента."]}),`
`]}),`
`,n.jsx(e.h2,{id:"вспомогательные-методы-именования",children:"Вспомогательные методы именования"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getName(): string"})," — Возвращает полное название компонента (например, ",n.jsx(e.code,{children:"button-large"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDesign(): string"})," — Возвращает базовое название дизайна (первая часть названия)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getSubClass(name: string | string[]): string"})," — Генерирует название класса для подэлемента (BEM: ",n.jsx(e.code,{children:"__"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getStatusClass(name: string | string[]): string"})," — Генерирует название класса состояния (BEM: ",n.jsx(e.code,{children:"--"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getStyle(name: string | string[]): string"})," — Генерирует название системной CSS-переменной."]}),`
`]}),`
`,n.jsx(e.h2,{id:"данные-компонента",children:"Данные компонента"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getAttrs(): object"})," — Возвращает атрибуты, исключая зарезервированные ",n.jsx(e.code,{children:"class"})," и ",n.jsx(e.code,{children:"style"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"expose(): object"})," — Возвращает данные и ссылки для экспорта через ",n.jsx(e.code,{children:"expose"})," Vue."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
