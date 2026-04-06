import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/# Перевод`}),`
`,(0,c.jsx)(n.h1,{id:`перевод`,children:`Перевод`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Translate`}),` — это централизованная система для работы с мультиязычным контентом. Он поддерживает автоматическую подгрузку недостающих ключей через API, кэширование, вставку переменных и многоуровневую систему запасных вариантов (fallback).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Translate } from '@dxtmisha/functional-basic'

// 1. Настройка API (по умолчанию /api/translate)
Translate.setUrl('/api/v1/dictionary')

// 2. Получение перевода (Async)
// Если ключа нет в кэше, он будет автоматически запрошен у сервера
const text = await Translate.get('welcome_message', { name: 'Admin' })

// 3. Синхронное получение (из кэша)
const label = Translate.getSync('save_button')
`})}),`
`,(0,c.jsx)(n.h2,{id:`шаблонизация`,children:`Шаблонизация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс поддерживает гибкую систему вставок через функцию `,(0,c.jsx)(n.code,{children:`applyTemplate`}),`. Вы можете использовать именованные ключи, позиционные метки или функциональные обертки.`]}),`
`,(0,c.jsx)(n.h3,{id:`ключи-и-метки`,children:`Ключи и метки`}),`
`,(0,c.jsxs)(n.p,{children:[`Поддерживаются фигурные `,(0,c.jsx)(n.code,{children:`{}`}),` и квадратные `,(0,c.jsx)(n.code,{children:`[]`}),` скобки для имен, а также `,(0,c.jsx)(n.code,{children:`%`}),` с буквами для порядковых аргументов.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// 1. Именованные ключи (объект)
// Текст: "Привет, {name}!"
await Translate.get('hi', { name: 'Алексей' }) // Привет, Алексей!

// 2. Позиционные метки (массив)
// Текст: "Файл %d из %e"
Translate.getSync('status', false, ['1', '10']) // Файл 1 из 10
// %d — 1-й элемент, %e — 2-й, %f — 3-й и т.д.
`})}),`
`,(0,c.jsx)(n.h3,{id:`обертки-taging`,children:`Обертки (Taging)`}),`
`,(0,c.jsxs)(n.p,{children:[`Позволяют упаковывать текст в HTML-теги или дополнительные компоненты. Текст внутри тега попадает в переменную `,(0,c.jsx)(n.code,{children:`{content}`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Текст: "{link}Читать далее{/link} в источнике."
const replacement = { 
  link: '<a href="/news">{content}</a>' 
}
Translate.getSync('more', false, replacement)
// <a href="/news">Читать далее</a> в источнике.
`})}),`
`,(0,c.jsx)(n.h2,{id:`управление-данными`,children:`Управление данными`}),`
`,(0,c.jsx)(n.p,{children:`Вы можете вручную добавлять переводы в реестр, что полезно для статических констант или при инициализации из локальных файлов.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Добавление списка переводов
Translate.addSync({
  'ru-button_ok': 'Ок',
  'ru-button_cancel': 'Отмена'
})

// Групповая предзагрузка ключей с сервера
await Translate.add(['title', 'description', 'footer_text'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`иерархия-поиска`,children:`Иерархия поиска`}),`
`,(0,c.jsx)(n.p,{children:`При поиске перевода система следует строгому порядку:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Текущая локаль (например, `,(0,c.jsx)(n.code,{children:`ru-RU-key`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[`Текущий язык (`,(0,c.jsx)(n.code,{children:`ru-key`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[`Глобальный префикс (`,(0,c.jsx)(n.code,{children:`global-key`}),`)`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};