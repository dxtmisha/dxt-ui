import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/Cookie - Управление Cookie`}),`
`,(0,c.jsx)(n.h1,{id:`класс-cookie`,children:`Класс Cookie`}),`
`,(0,c.jsxs)(n.p,{children:[`Удобная обертка для управления браузерными куки. Она автоматически синхронизируется между памятью и API DOM `,(0,c.jsx)(n.code,{children:`document.cookie`}),`, позволяя вам реактивно устанавливать, извлекать и удалять куки, гарантируя при этом согласованные значения по умолчанию.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронизация с памятью`}),` — поддерживает запись куки в памяти для предотвращения ненужных обращений к DOM. Автоматически парсит `,(0,c.jsx)(n.code,{children:`document.cookie`}),` при запуске.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Понимание окружения`}),` — определяет, выполняется ли код в среде DOM. В SSR (Server-Side Rendering) или при тестировании (без DOM) она элегантно переходит на хранение только в памяти без выброса ошибок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальный контроль блокировки`}),` — безопасно интегрируется с `,(0,c.jsx)(n.code,{children:`CookieBlock`}),`. Если запись куки глобально отключена (например, из-за согласия пользователя на конфиденциальность), класс `,(0,c.jsx)(n.code,{children:`Cookie`}),` уважает это и приостанавливает все исходящие изменения в DOM.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Логика по умолчанию`}),` — получение значения может лениво инициализировать его стандартом по умолчанию, если оно еще не существует.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`Cookie(name)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — имя куки, которым вы хотите управлять.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Cookie } from '@dxtmisha/functional'

// 1. Инициализация обертки для куки 'theme'
const themeCookie = new Cookie('theme')
`})}),`
`,(0,c.jsx)(n.h2,{id:`управление-данными`,children:`Управление данными`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Используйте `,(0,c.jsx)(n.code,{children:`get()`}),` для его чтения. Если вы передадите значение по умолчанию в `,(0,c.jsx)(n.code,{children:`get()`}),`, оно одновременно сохранит это значение по умолчанию, если куки ранее не было установлено.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T | string | (() => T | string)`}),` — опциональное значение по умолчанию или функция.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T | string | undefined`}),` — значение из куки или заданное по умолчанию.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Прочитает 'theme', ИЛИ установит и вернет 'dark', если его не существует
const currentTheme = themeCookie.get('dark') 
`})}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Используйте `,(0,c.jsx)(n.code,{children:`set()`}),` для переопределения или создания новых данных. Опции позволяют управлять стандартными атрибутами куки, такими как `,(0,c.jsx)(n.code,{children:`age`}),` (продолжительность кэширования Max-Age в секундах) или политика `,(0,c.jsx)(n.code,{children:`sameSite`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T | string | (() => T | string)`}),` — значение для хранения, или функция, возвращающая значение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: CookieOptions`}),` — конфигурация срока жизни и безопасности куки.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const userPrefs = new Cookie('preferences')

// Установка простой строки
userPrefs.set('{"compact": true}')

// Установка с расширенными опциями
userPrefs.set('{"compact": true}', {
  age: 60 * 60 * 24 * 30, // 30 дней
  sameSite: 'lax'
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsxs)(n.p,{children:[`Удаление куки перезаписывает его пустой строкой и устанавливает его Max-Age в `,(0,c.jsx)(n.code,{children:`-1`}),`, давая браузеру команду немедленно удалить запись.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`userPrefs.remove()
`})}),`
`,(0,c.jsx)(n.h2,{id:`синхронизация`,children:`Синхронизация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`updateData(): void`}),` (static) — Обновляет данные из `,(0,c.jsx)(n.code,{children:`document.cookie`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`параметры-cookieoptions`,children:`Параметры CookieOptions`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`CookieOptions`}),` — объект конфигурации для методов `,(0,c.jsx)(n.code,{children:`get`}),` и `,(0,c.jsx)(n.code,{children:`set`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`age?: number`}),` — время жизни куки в `,(0,c.jsx)(n.strong,{children:`секундах`}),` (атрибут `,(0,c.jsx)(n.code,{children:`Max-Age`}),`). По умолчанию: 7 дней (604800 сек). При удалении (`,(0,c.jsx)(n.code,{children:`remove()`}),`) автоматически становится `,(0,c.jsx)(n.code,{children:`-1`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sameSite?: 'strict' | 'lax'`}),` — политика `,(0,c.jsx)(n.code,{children:`SameSite`}),`. По умолчанию: `,(0,c.jsx)(n.code,{children:`'strict'`}),` (куки отправляется только при переходах внутри сайта). `,(0,c.jsx)(n.code,{children:`'lax'`}),` — также разрешает отправку при переходах с внешних ссылок (GET-запросы).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`arguments?: string[]`}),` — массив дополнительных директив, которые добавляются в строку куки (например: `,(0,c.jsx)(n.code,{children:`'Secure'`}),`, `,(0,c.jsx)(n.code,{children:`'Path=/'`}),`, `,(0,c.jsx)(n.code,{children:`'Domain=.myapp.com'`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};