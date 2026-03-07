import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(l){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/applyTemplate - Применение шаблона к тексту"}),`
`,n.jsx(e.h1,{id:"applytemplate",children:n.jsx(e.code,{children:"applyTemplate"})}),`
`,n.jsx(e.p,{children:"Утилита для динамического формирования текста на основе шаблонов. Это полезно для задач локализации (i18n), генерации системных сообщений или подстановки пользовательских данных в строковые константы."}),`
`,n.jsx(e.p,{children:"Она поддерживает:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Позиционные маркеры (",n.jsx(e.code,{children:"%d"}),", ",n.jsx(e.code,{children:"%e"})," и т.д.) для подстановки значений из массива по порядку."]}),`
`,n.jsxs(e.li,{children:["Именованные маркеры (",n.jsx(e.code,{children:"[key]"}),", ",n.jsx(e.code,{children:"{key}"}),") для подстановки значений из объекта по ключам."]}),`
`,n.jsxs(e.li,{children:["Парные теги (",n.jsx(e.code,{children:"[key]контент[/key]"}),", ",n.jsx(e.code,{children:"{key}контент{/key}"}),") для оборачивания контента в HTML-теги или другие конструкции (слово ",n.jsx(e.code,{children:"[content]"})," внутри переданного значения заменяется на содержимое тега)."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"text: string"})," — Исходный текст с шаблоном."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"replacement: Record<string, string | number> | string[]"})," — Объект или массив со значениями для подстановки. По умолчанию ",n.jsx(e.code,{children:"{}"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"string"})," — Текст с подставленными значениями."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { applyTemplate } from '@dxtmisha/functional-basic'

// Позиционные маркеры
console.log(applyTemplate('Привет, %d %e!', ['Иван', 'Иванов'])) // 'Привет, Иван Иванов!'

// Именованные маркеры
console.log(applyTemplate('Привет, [name]!', { name: 'Иван' })) // 'Привет, Иван!'
console.log(applyTemplate('Привет, {name}!', { name: 'Иван' })) // 'Привет, Иван!'

// Обёртка с парными тегами и контентом
console.log(applyTemplate('Нажми [link]здесь[/link]', { link: '<a href="#">[content]</a>' }))
console.log(applyTemplate('Нажми {link}здесь{/link}', { link: '<a href="#">{content}</a>' }))
// 'Нажми <a href="#">здесь</a>'
`})})]})}function x(l={}){const{wrapper:e}={...c(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(s,{...l})}):s(l)}export{x as default};
