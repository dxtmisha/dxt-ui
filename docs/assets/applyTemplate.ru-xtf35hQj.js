import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/applyTemplate - Применение шаблона к тексту`}),`
`,(0,c.jsx)(n.h1,{id:`applytemplate`,children:(0,c.jsx)(n.code,{children:`applyTemplate`})}),`
`,(0,c.jsx)(n.p,{children:`Утилита для динамического формирования текста на основе шаблонов. Это полезно для задач локализации (i18n), генерации системных сообщений или подстановки пользовательских данных в строковые константы.`}),`
`,(0,c.jsx)(n.p,{children:`Она поддерживает:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Позиционные маркеры (`,(0,c.jsx)(n.code,{children:`%d`}),`, `,(0,c.jsx)(n.code,{children:`%e`}),` и т.д.) для подстановки значений из массива по порядку.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Именованные маркеры (`,(0,c.jsx)(n.code,{children:`[key]`}),`, `,(0,c.jsx)(n.code,{children:`{key}`}),`) для подстановки значений из объекта по ключам.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Парные теги (`,(0,c.jsx)(n.code,{children:`[key]контент[/key]`}),`, `,(0,c.jsx)(n.code,{children:`{key}контент{/key}`}),`) для оборачивания контента в HTML-теги или другие конструкции (слово `,(0,c.jsx)(n.code,{children:`[content]`}),` внутри переданного значения заменяется на содержимое тега).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — Исходный текст с шаблоном.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacement: Record<string, string | number> | string[]`}),` — Объект или массив со значениями для подстановки. По умолчанию `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Текст с подставленными значениями.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { applyTemplate } from '@dxtmisha/functional-basic'

// Позиционные маркеры
console.log(applyTemplate('Привет, %d %e!', ['Иван', 'Иванов'])) // 'Привет, Иван Иванов!'

// Именованные маркеры
console.log(applyTemplate('Привет, [name]!', { name: 'Иван' })) // 'Привет, Иван!'
console.log(applyTemplate('Привет, {name}!', { name: 'Иван' })) // 'Привет, Иван!'

// Обёртка с парными тегами и контентом
console.log(applyTemplate('Нажми [link]здесь[/link]', { link: '<a href="#">[content]</a>' }))
console.log(applyTemplate('Нажми {link}здесь{/link}', { link: '<a href="#">{content}</a>' }))
// 'Нажми <a href="#">здесь</a>'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};