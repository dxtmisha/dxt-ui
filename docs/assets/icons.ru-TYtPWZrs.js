import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/# Иконки`}),`
`,(0,c.jsx)(n.h1,{id:`иконки`,children:`Иконки`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Icons`}),` — это централизованный реестр для регистрации, хранения и ленивой загрузки иконок. Он позволяет управлять путями к ассетам, поддерживает динамические импорты и синхронизирует состояние между различными частями приложения через глобальный объект.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Icons } from '@dxtmisha/functional-basic'

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
`})}),`
`,(0,c.jsx)(n.h2,{id:`ленивая-загрузка`,children:`Ленивая загрузка`}),`
`,(0,c.jsxs)(n.p,{children:[`Одной из ключевых особенностей является поддержка `,(0,c.jsx)(n.code,{children:`Promise`}),` и функций, что позволяет подгружать иконки только в момент их реального использования, снижая объем начальной загрузки приложения.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Регистрация через динамический импорт
Icons.add('user', () => import('./user.svg'))

// Автоматическое ожидание загрузки при вызове get
const iconData = await Icons.get('user')
`})}),`
`,(0,c.jsx)(n.h2,{id:`глобальная-синхронизация`,children:`Глобальная синхронизация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инструмент автоматически поддерживает актуальность данных в `,(0,c.jsx)(n.code,{children:`window.__UI_ICON`}),`. Это позволяет регистрировать иконки в одном месте (например, при инициализации приложения) и мгновенно получать к ним доступ в любой части кода.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Добавление иконки относительно глобального пути
Icons.addGlobal('logo', 'logo.svg')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};