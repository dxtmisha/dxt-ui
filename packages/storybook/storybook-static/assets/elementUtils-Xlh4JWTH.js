import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DB_maGql.js";import{M as s}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function l(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/functional/ru/Element Utils"}),`
`,e.jsx(n.h1,{id:"утилиты-для-работы-с-dom-элементами",children:"Утилиты для работы с DOM элементами"}),`
`,e.jsx(n.p,{children:"Набор функций для создания, поиска и манипуляции DOM элементами."}),`
`,e.jsx(n.h2,{id:"createelement",children:e.jsx(n.code,{children:"createElement"})}),`
`,e.jsx(n.p,{children:"Создает новый HTML элемент с указанным тегом и опционально добавляет его в родительский элемент."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parentElement?: HTMLElement"})," — родительский элемент для вставки (опционально)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tagName: string"})," — тег создаваемого элемента (по умолчанию ",e.jsx(n.code,{children:"'div'"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void)"})," — объект атрибутов или функция настройки (опционально)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"referenceElement?: HTMLElement"})," — элемент, перед которым вставить новый (опционально)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { createElement } from '@dxtmisha/functional'

const div = createElement() // <div>
const button = createElement(parent, 'button') // <button> в parent
const input = createElement(parent, 'input', { type: 'text' }) // <input type="text">
`})}),`
`,e.jsx(n.h2,{id:"domqueryselector",children:e.jsx(n.code,{children:"domQuerySelector"})}),`
`,e.jsx(n.p,{children:"Безопасно ищет первый элемент, соответствующий CSS селектору."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectors: string"})," — CSS селектор для поиска"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { domQuerySelector } from '@dxtmisha/functional'

const header = domQuerySelector('#header') // HTMLElement | undefined
const button = domQuerySelector('.submit-btn') // HTMLElement | undefined
const input = domQuerySelector('input[type="email"]') // HTMLInputElement | undefined
`})}),`
`,e.jsx(n.h2,{id:"domqueryselectorall",children:e.jsx(n.code,{children:"domQuerySelectorAll"})}),`
`,e.jsx(n.p,{children:"Безопасно ищет все элементы, соответствующие CSS селектору."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectors: string"})," — CSS селектор для поиска"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { domQuerySelectorAll } from '@dxtmisha/functional'

const buttons = domQuerySelectorAll('button') // NodeList | undefined
const items = domQuerySelectorAll('.menu-item') // NodeList | undefined
const links = domQuerySelectorAll('a[href]') // NodeList | undefined
`})}),`
`,e.jsx(n.h2,{id:"getattributes",children:e.jsx(n.code,{children:"getAttributes"})}),`
`,e.jsx(n.p,{children:"Получает все атрибуты HTML элемента в виде объекта ключ-значение."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — селектор или элемент для получения атрибутов"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getAttributes } from '@dxtmisha/functional'

const attrs = getAttributes('#my-element') // { id: 'my-element', class: 'btn' }
const buttonAttrs = getAttributes(button) // { type: 'submit', disabled: '' }
`})}),`
`,e.jsx(n.h2,{id:"getelement",children:e.jsx(n.code,{children:"getElement"})}),`
`,e.jsx(n.p,{children:"Универсальная функция для получения DOM элемента. Принимает CSS селектор, элемент или window."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — селектор, элемент или window"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getElement } from '@dxtmisha/functional'

const header = getElement('#header') // HTMLElement | undefined
const sameEl = getElement(existingEl) // возвращает existingEl
const bodyEl = getElement(window) // возвращает document.body
`})}),`
`,e.jsx(n.h2,{id:"getelementid",children:e.jsx(n.code,{children:"getElementId"})}),`
`,e.jsxs(n.p,{children:["Получает ID элемента или создает уникальный ID, если элемент не имеет атрибута ",e.jsx(n.code,{children:"id"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — элемент для получения ID"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selector?: string"})," — дополнительный селектор для добавления к ID"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getElementId } from '@dxtmisha/functional'

const id1 = getElementId(elementWithId) // 'existing'
const id2 = getElementId(elementNoId) // 'id-123456' (сгенерированный)
const id3 = getElementId('#header', ' .title') // '#header .title'
`})}),`
`,e.jsx(n.h2,{id:"getelementitem",children:e.jsx(n.code,{children:"getElementItem"})}),`
`,e.jsx(n.p,{children:"Получает значение свойства элемента по ключу с возможностью указания значения по умолчанию."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: ElementOrString<T>"})," — элемент для проверки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index: K | string"})," — ключ свойства для получения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: D"})," — значение по умолчанию"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getElementItem } from '@dxtmisha/functional'

const value = getElementItem(input, 'value') // значение input
const type = getElementItem(input, 'type', 'text') // тип или 'text' по умолчанию
const width = getElementItem(element, 'offsetWidth')
`})}),`
`,e.jsx(n.h2,{id:"getelementorwindow",children:e.jsx(n.code,{children:"getElementOrWindow"})}),`
`,e.jsx(n.p,{children:"Возвращает window объект как есть или получает DOM элемент."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — селектор, элемент или window"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getElementOrWindow } from '@dxtmisha/functional'

const windowObj = getElementOrWindow(window) // window
const element = getElementOrWindow('#container') // HTMLElement
`})}),`
`,e.jsx(n.h2,{id:"goscroll",children:e.jsx(n.code,{children:"goScroll"})}),`
`,e.jsx(n.p,{children:"Плавно прокручивает страницу или элемент к указанной позиции."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — элемент для прокрутки (по умолчанию window)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"top?: number"})," — позиция по вертикали"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"left?: number"})," — позиция по горизонтали"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { goScroll } from '@dxtmisha/functional'

goScroll(window, 0) // прокрутка наверх
goScroll('#container', 100, 50) // прокрутка элемента
`})}),`
`,e.jsx(n.h2,{id:"initscrollbaroffset",children:e.jsx(n.code,{children:"initScrollbarOffset"})}),`
`,e.jsx(n.p,{children:"Инициализирует данные для управления скроллом, устанавливая CSS-переменную с шириной полосы прокрутки."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { initScrollbarOffset } from '@dxtmisha/functional'

// Инициализация при загрузке приложения
await initScrollbarOffset() // устанавливает --sys-scrollbar-offset в CSS
`})}),`
`,e.jsx(n.h2,{id:"setelementitem",children:e.jsx(n.code,{children:"setElementItem"})}),`
`,e.jsx(n.p,{children:"Устанавливает значение свойства элемента по ключу."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: ElementOrString<T>"})," — элемент для изменения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index: K | string"})," — ключ свойства для установки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — новое значение"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { setElementItem } from '@dxtmisha/functional'

setElementItem(input, 'value', 'новое значение')
setElementItem('#my-element', 'textContent', 'Hello World')
setElementItem(button, 'disabled', true)
`})})]})}function x(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{x as default};
