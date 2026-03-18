import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/createElement - Создание HTML-элемента"}),`
`,e.jsx(n.h1,{id:"createelement",children:e.jsx(n.code,{children:"createElement"})}),`
`,e.jsx(n.p,{children:"В браузерном окружении создаёт новый HTML-элемент с указанным тегом и вставляет его в DOM-дерево."}),`
`,e.jsxs(n.p,{children:["Функция проверяет наличие DOM-окружения с помощью ",e.jsx(n.code,{children:"isDomRuntime()"}),". Если код выполняется не в браузере (например, на сервере во время SSR), функция вернёт ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parentElement?: HTMLElement"})," — Родительский элемент, в который будет вставлен новый узел."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tagName: string = 'div'"})," — Строка, определяющая тип создаваемого элемента (по умолчанию ",e.jsx(n.code,{children:"'div'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void)"})," — Объект с атрибутами и свойствами для элемента (например, ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"className"}),", обработчики событий), или функция-колбэк для тонкой настройки элемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"referenceElement?: HTMLElement"})," — Элемент, перед которым будет вставлен новый ",e.jsx(n.code,{children:"element"}),". Если не передан (или равен ",e.jsx(n.code,{children:"null"}),"), элемент будет добавлен в конец дочерних узлов родителя (",e.jsx(n.code,{children:"appendChild"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"T | undefined"})," — Созданный HTML-элемент, или ",e.jsx(n.code,{children:"undefined"}),", если DOM недоступен."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { createElement } from '@dxtmisha/functional-basic'

const container = document.getElementById('app')

// Создание элемента с атрибутами
const btn = createElement(container, 'button', {
  className: 'primary-btn',
  textContent: 'Нажми меня',
  onclick: () => alert('Клик!')
})

// Тонкая настройка через функцию
createElement(container, 'span', (el) => {
  el.style.color = 'red'
  el.dataset.customId = '123'
  el.textContent = 'Текст с ошибкой'
})
`})})]})}function x(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{x as default};
