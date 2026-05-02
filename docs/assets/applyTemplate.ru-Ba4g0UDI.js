import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-BDI5G1Gi.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/applyTemplate - Применение шаблона к тексту`}),`
`,(0,l.jsx)(n.h1,{id:`applytemplate`,children:(0,l.jsx)(n.code,{children:`applyTemplate`})}),`
`,(0,l.jsx)(n.p,{children:`Утилита для замены меток в тексте на значения из объекта или массива.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`text: string`}),` — Исходный текст с шаблоном.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`replacement: Record<string, string | number | boolean> | string[]`}),` — Объект или массив со значениями.`]}),`
`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Форматы замены (replacement)`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Массив`}),`: Используется для позиционных меток `,(0,l.jsx)(n.code,{children:`%d`}),`, `,(0,l.jsx)(n.code,{children:`%e`}),`, `,(0,l.jsx)(n.code,{children:`%f`}),` и далее по алфавиту.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Объект`}),`: Используется для именованных меток в скобках `,(0,l.jsx)(n.code,{children:`[key]`}),` или `,(0,l.jsx)(n.code,{children:`{key}`}),`, а также для парных тегов `,(0,l.jsx)(n.code,{children:`[tag]текст[/tag]`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`string`}),` — Текст с подставленными значениями.`]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { applyTemplate } from '@dxtmisha/functional-basic'

// 1. Позиционные маркеры (массив)
applyTemplate('Привет, %d %e!', ['Иван', 'Иванов']) // 'Привет, Иван Иванов!'

// 2. Именованные маркеры (объект)
applyTemplate('Цена: [price] {currency}', { price: 100, currency: 'USD' }) // 'Цена: 100 USD'

// 3. Обработка 0 и false
applyTemplate('Значение: [val]', { val: 0 })      // 'Значение: 0'
applyTemplate('Статус: [val]', { val: false })    // 'Статус: false'

// 4. Пропуск отсутствующих ключей
applyTemplate('Отсутствует: [none]', {})           // 'Отсутствует: [none]'

// 5. Парные теги с подстановкой контента
const tags = { link: '<a href="https://google.com">[content]</a>' }
applyTemplate('Нажми [link]здесь[/link]', tags)  // 'Нажми <a href="https://google.com">здесь</a>'

// 6. Макросы списка (выход за границы)
applyTemplate('Список: %d, %e, %f', ['A', 'B'])  // 'Список: A, B, '
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};