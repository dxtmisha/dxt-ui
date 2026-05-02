import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/CookieBlock - Глобальный контроль Cookie`}),`
`,(0,c.jsx)(n.h1,{id:`класс-cookieblock`,children:`Класс CookieBlock`}),`
`,(0,c.jsxs)(n.p,{children:[`Статический служебный класс, служащий глобальным "аварийным выключателем" для изменений куки в DOM. Предоставляет простое логическое состояние, которое другие классы, в частности `,(0,c.jsx)(n.code,{children:`Cookie`}),`, проверяют перед попыткой записи в `,(0,c.jsx)(n.code,{children:`document.cookie`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Включает тесную интеграцию с `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` для изоляции состояния между запросами в SSR окружении.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальная истина`}),` — единая точка конфигурации для остановки операций с куки в масштабах всего приложения`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Соответствие конфиденциальности`}),` — крайне полезно для реализации баннеров "Согласие на использование файлов cookie"`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SSR-совместимость`}),` — использует `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` для надежного поддержания заблокированного состояния в изолированном контексте каждого запроса`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`статические-методы`,children:`Статические методы`}),`
`,(0,c.jsx)(n.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(n.h4,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Включает или отключает возможности записи куки в DOM. При значении `,(0,c.jsx)(n.code,{children:`true`}),` все операции записи будут сохранять данные только в памяти, не затрагивая `,(0,c.jsx)(n.code,{children:`document.cookie`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` для блокировки записи куки, `,(0,c.jsx)(n.code,{children:`false`}),` для разрешения`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): boolean`}),` — Возвращает текущий статус блокировки. `,(0,c.jsx)(n.code,{children:`true`}),`, если запись куки заблокирована`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieBlock } from '@dxtmisha/functional'

// Блокировать все будущие записи куки в DOM
CookieBlock.set(true)

if (CookieBlock.get()) {
  console.log('Запись куки в настоящее время заблокирована')
}

// Разрешить записи куки в DOM
CookieBlock.set(false)
`})}),`
`,(0,c.jsx)(n.h3,{id:`реализация-баннера-согласия`,children:`Реализация баннера согласия`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieBlock, Cookie } from '@dxtmisha/functional'

// При загрузке приложения блокируем cookie
CookieBlock.set(true)

// После принятия пользователем
function onCookieConsentAccepted() {
  CookieBlock.set(false)
  
  // Теперь можно устанавливать cookie
  const theme = new Cookie('theme')
  theme.set('dark')
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`как-это-взаимодействует-с-cookie`,children:[`Как это взаимодействует с `,(0,c.jsx)(n.code,{children:`Cookie`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Базовый класс `,(0,c.jsx)(n.code,{children:`Cookie`}),` строго следит за этой блокировкой. Если `,(0,c.jsx)(n.code,{children:`CookieBlock.get()`}),` возвращает `,(0,c.jsx)(n.code,{children:`true`}),`:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Логика приложения может технически вызывать `,(0,c.jsx)(n.code,{children:`cookieInstance.set('value')`})]}),`
`,(0,c.jsxs)(n.li,{children:[`Экземпляр `,(0,c.jsx)(n.code,{children:`Cookie`}),` обновит свое `,(0,c.jsx)(n.em,{children:`внутреннее хранилище в памяти`}),` новым значением`]}),`
`,(0,c.jsxs)(n.li,{children:[`Экземпляр `,(0,c.jsx)(n.code,{children:`Cookie`}),` `,(0,c.jsx)(n.strong,{children:`молча откажется`}),` от фактической записи в DOM `,(0,c.jsx)(n.code,{children:`document.cookie = ...`})]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Это гарантирует, что приложение не сломается от неопределенных чтений в памяти, при этом строго соблюдая настройки браузера по сохранению на диск.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};