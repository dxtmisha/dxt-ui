import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/CookieBlock - Глобальный контроль Cookie`}),`
`,(0,c.jsx)(n.h1,{id:`класс-cookieblock`,children:`Класс CookieBlock`}),`
`,(0,c.jsxs)(n.p,{children:[`Статический служебный класс, который служит глобальным "аварийным выключателем" для изменений куки в DOM. Он предоставляет простое логическое состояние, которое другие классы, в частности `,(0,c.jsx)(n.code,{children:`Cookie`}),`, проверяют перед попыткой записи в `,(0,c.jsx)(n.code,{children:`document.cookie`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальная истина`}),` — единая точка конфигурации для остановки операций с куки в масштабах всего приложения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Соответствие конфиденциальности`}),` — крайне полезно для реализации баннеров "Согласие на использование файлов cookie". Просто установите блокировку в `,(0,c.jsx)(n.code,{children:`true`}),`, пока пользователь явно не примет все куки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка DataStorage`}),` — внутренне использует абстракцию `,(0,c.jsx)(n.code,{children:`DataStorage`}),` для надежного поддержания заблокированного состояния.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Поскольку все методы `,(0,c.jsx)(n.code,{children:`static`}),`, вы взаимодействуете с классом напрямую.`]}),`
`,(0,c.jsx)(n.h2,{id:`управление-доступом`,children:`Управление доступом`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Используйте метод `,(0,c.jsx)(n.code,{children:`get()`}),` для чтения текущего статуса блокировки. Возвращает логическое значение.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если запись куки заблокирована.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`if (CookieBlock.get()) {
  console.log('Запись куки в настоящее время заблокирована настройками пользователя.')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Используйте метод `,(0,c.jsx)(n.code,{children:`set()`}),` для включения или отключения возможностей записи куки.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` для блокировки записи куки, `,(0,c.jsx)(n.code,{children:`false`}),` для разрешения.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { CookieBlock } from '@dxtmisha/functional'

// Заблокировать все будущие записи куки в DOM
CookieBlock.set(true)

// Разрешить записи куки в DOM (поведение по умолчанию)
CookieBlock.set(false)
`})}),`
`,(0,c.jsxs)(n.h2,{id:`как-это-взаимодействует-с-cookie`,children:[`Как это взаимодействует с `,(0,c.jsx)(n.code,{children:`Cookie`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Базовый класс `,(0,c.jsx)(n.code,{children:`Cookie`}),` строго следит за этой блокировкой. Если `,(0,c.jsx)(n.code,{children:`CookieBlock.get()`}),` возвращает `,(0,c.jsx)(n.code,{children:`true`}),`:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Логика вашего приложения технически все еще может вызывать `,(0,c.jsx)(n.code,{children:`cookieInstance.set('value')`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Экземпляр `,(0,c.jsx)(n.code,{children:`Cookie`}),` обновит свое `,(0,c.jsx)(n.em,{children:`внутреннее хранилище в памяти`}),` новым значением.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Экземпляр `,(0,c.jsx)(n.code,{children:`Cookie`}),` `,(0,c.jsx)(n.strong,{children:`молча откажется`}),` от фактической записи в DOM `,(0,c.jsx)(n.code,{children:`document.cookie = ...`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Это гарантирует, что ваше приложение не сломается от неопределенных чтений в памяти, при этом строго соблюдая настройки браузера по сохранению на диск.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};