import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/CookieBlockInstance - Экземпляр статуса доступа к куки`}),`
`,(0,c.jsx)(t.h1,{id:`класс-cookieblockinstance`,children:`Класс CookieBlockInstance`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`CookieBlockInstance`}),` отвечает за управление статусом доступа к куки на уровне экземпляра. Предоставляет локализованное состояние для блокировки или разрешения операций с куки, что необходимо для изоляции запросов в Server-Side Rendering (SSR) или когда требуются несколько независимых контекстов.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Включает тесную интеграцию с `,(0,c.jsx)(t.code,{children:`DataStorage`}),` для надежного сохранения статуса.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`На основе экземпляров`}),` — позволяет создавать отдельные экземпляры с их собственным статусом блокировки`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с DataStorage`}),` — автоматически сохраняет статус блокировки, используя класс `,(0,c.jsx)(t.code,{children:`DataStorage`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Совместимость с SSR`}),` — разработан для бесшовной работы в серверных средах, используя паттерн "один экземпляр на запрос" при использовании через обертку `,(0,c.jsx)(t.code,{children:`CookieBlock`})]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(t.h4,{id:`set`,children:(0,c.jsx)(t.code,{children:`set`})}),`
`,(0,c.jsxs)(t.p,{children:[`Обновляет статус доступа к куки. При значении `,(0,c.jsx)(t.code,{children:`true`}),` блокирует все операции записи с куки в контексте этого экземпляра.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: boolean`}),` — новый статус для установки`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): boolean`}),` — Возвращает текущий статус доступа к куки. `,(0,c.jsx)(t.code,{children:`true`}),`, если куки заблокированы, иначе `,(0,c.jsx)(t.code,{children:`false`})]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieBlockInstance } from '@dxtmisha/functional-basic'

const cookieBlock = new CookieBlockInstance()

// Получить текущий статус
console.log(cookieBlock.get()) // false (по умолчанию)

// Заблокировать куки
cookieBlock.set(true)

console.log(cookieBlock.get()) // true

// Разблокировать куки
cookieBlock.set(false)

console.log(cookieBlock.get()) // false
`})}),`
`,(0,c.jsx)(t.h3,{id:`использование-через-cookieblock`,children:`Использование через CookieBlock`}),`
`,(0,c.jsxs)(t.p,{children:[`Хотя `,(0,c.jsx)(t.code,{children:`CookieBlockInstance`}),` можно использовать напрямую, обычно к нему обращаются через статическую обертку `,(0,c.jsx)(t.code,{children:`CookieBlock`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieBlock } from '@dxtmisha/functional-basic'

// CookieBlock автоматически создает изолированный экземпляр для каждого запроса
CookieBlock.set(true)

// Статус доступен через статические методы
if (CookieBlock.get()) {
  console.log('Куки заблокированы в текущем контексте')
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`независимые-контексты`,children:`Независимые контексты`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieBlockInstance } from '@dxtmisha/functional-basic'

// Создание независимых экземпляров
const block1 = new CookieBlockInstance()
const block2 = new CookieBlockInstance()

block1.set(true)

console.log(block1.get()) // true
console.log(block2.get()) // false (независимый экземпляр)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};