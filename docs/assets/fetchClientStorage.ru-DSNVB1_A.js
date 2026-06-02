import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma/Functions/fetchClientStorage - Получение данных из клиентского хранилища`}),`
`,(0,l.jsx)(n.h1,{id:`fetchclientstorage`,children:(0,l.jsx)(n.code,{children:`fetchClientStorage`})}),`
`,(0,l.jsxs)(n.p,{children:[`Утилита для получения данных из клиентского хранилища Figma (`,(0,l.jsx)(n.code,{children:`clientStorage`}),`). Обеспечивает связь между интерфейсом (UI) и основной частью плагина для извлечения сохраненных значений.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Ключ (имя) в хранилище.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (value: T) => void`}),` — Функция, которая будет вызвана после получения данных.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`defaultValue?: T`}),` — (Опционально) Значение по умолчанию, если ключ в хранилище отсутствует.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`isOnce: boolean = true`}),` — Если `,(0,l.jsx)(n.code,{children:`true`}),`, колбэк будет вызван только один раз.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchClientStorage } from '@dxtmisha/figma'

// 1. Базовое использование со строковым значением
fetchClientStorage<string>('user-theme', (theme) => {
console.log('Текущая тема:', theme)
}, 'light')

// 2. Получение объекта
interface UserSettings {
notifications: boolean
zoom: number
}

fetchClientStorage<UserSettings>('settings', (settings) => {
console.log('Настройки пользователя:', settings)
}, { notifications: true, zoom: 100 })

// 3. Постоянная подписка (isOnce = false)
fetchClientStorage<number>('counter', (count) => {
console.log('Счетчик обновлен:', count)
}, 0, false)
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};