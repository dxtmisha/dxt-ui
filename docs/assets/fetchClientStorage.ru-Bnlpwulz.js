import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/figma/Functions/fetchClientStorage - Получение данных из клиентского хранилища`}),`
`,(0,l.jsx)(t.h1,{id:`fetchclientstorage`,children:(0,l.jsx)(t.code,{children:`fetchClientStorage`})}),`
`,(0,l.jsxs)(t.p,{children:[`Утилита для получения данных из клиентского хранилища Figma (`,(0,l.jsx)(t.code,{children:`clientStorage`}),`). Обеспечивает связь между интерфейсом (UI) и основной частью плагина для извлечения сохраненных значений.`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Ключ (имя) в хранилище.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (value: T) => void`}),` — Функция, которая будет вызвана после получения данных.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`defaultValue?: T`}),` — (Опционально) Значение по умолчанию, если ключ в хранилище отсутствует.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`isOnce: boolean = true`}),` — Если `,(0,l.jsx)(t.code,{children:`true`}),`, колбэк будет вызван только один раз.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};