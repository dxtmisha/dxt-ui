import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/13. Иконки`}),`
`,(0,c.jsx)(t.h1,{id:`иконки`,children:`Иконки`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`Icons`}),` — это централизованный реестр для регистрации, хранения и ленивой загрузки иконок. Он позволяет управлять путями к ассетам, поддерживает динамические импорты и синхронизирует состояние между различными частями приложения через глобальный объект.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Icons } from '@dxtmisha/functional-basic'

// 1. Настройка базового пути (по умолчанию /icons/)
Icons.setUrl('/assets/icons/')

// 2. Регистрация иконок
Icons.add('home', 'home-icon.svg')
Icons.addByList({
  'search': 'search.svg',
  'close': 'close.svg'
})

// 3. Проверка и получение
if (Icons.is('home')) {
  const path = await Icons.get('home')
}

// 4. Синхронное получение
const fastPath = Icons.getAsync('search') // возвращает строку или пустую строку
`})}),`
`,(0,c.jsx)(t.h2,{id:`ленивая-загрузка`,children:`Ленивая загрузка`}),`
`,(0,c.jsxs)(t.p,{children:[`Одной из ключевых особенностей является поддержка `,(0,c.jsx)(t.code,{children:`Promise`}),` и функций, что позволяет подгружать иконки только в момент их реального использования, снижая объем начальной загрузки приложения.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Регистрация через динамический импорт
Icons.add('user', () => import('./user.svg'))

// Автоматическое ожидание загрузки при вызове get
const iconData = await Icons.get('user')
`})}),`
`,(0,c.jsx)(t.h2,{id:`глобальная-синхронизация`,children:`Глобальная синхронизация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инструмент автоматически поддерживает актуальность данных в `,(0,c.jsx)(t.code,{children:`window.__UI_ICON`}),`. Это позволяет регистрировать иконки в одном месте (например, при инициализации приложения) и мгновенно получать к ним доступ в любой части кода.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Добавление иконки относительно глобального пути
Icons.addGlobal('logo', 'logo.svg')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};