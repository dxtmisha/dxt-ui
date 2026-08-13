import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/functional-basic/Functions/applyTemplate - Применение шаблона к тексту`}),`
`,(0,l.jsx)(t.h1,{id:`applytemplate`,children:(0,l.jsx)(t.code,{children:`applyTemplate`})}),`
`,(0,l.jsx)(t.p,{children:`Утилита для замены меток в тексте на значения из объекта или массива.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`text: string`}),` — Исходный текст с шаблоном.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`replacement: Record<string, string | number | boolean> | string[]`}),` — Объект или массив со значениями.`]}),`
`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Форматы замены (replacement)`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Массив`}),`: Используется для позиционных меток `,(0,l.jsx)(t.code,{children:`%d`}),`, `,(0,l.jsx)(t.code,{children:`%e`}),`, `,(0,l.jsx)(t.code,{children:`%f`}),` и далее по алфавиту.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Объект`}),`: Используется для именованных меток в скобках `,(0,l.jsx)(t.code,{children:`[key]`}),` или `,(0,l.jsx)(t.code,{children:`{key}`}),`, а также для парных тегов `,(0,l.jsx)(t.code,{children:`[tag]текст[/tag]`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`string`}),` — Текст с подставленными значениями.`]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};