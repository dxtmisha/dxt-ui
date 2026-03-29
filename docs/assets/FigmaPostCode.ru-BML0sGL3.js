import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/figma/Classes/FigmaPostCode - Проверка сообщений`}),`
`,(0,c.jsx)(n.h1,{id:`класс-figmapostcode`,children:`Класс FigmaPostCode`}),`
`,(0,c.jsx)(n.p,{children:`Утилитарный класс для управления уникальным кодом верификации, используемым для обеспечения целостности сообщений между плагином Figma (backend) и его UI (frontend). Это гарантирует, что сообщения, полученные одной стороной, действительно были отправлены другой стороной той же сессии плагина.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасность`}),` — Предотвращает вмешательство сообщений от других плагинов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Блокировка сессии`}),` — Код может быть установлен только один раз за сессию, что обеспечивает согласованность.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автогенерация`}),` — По умолчанию генерируется случайный код (например, `,(0,c.jsx)(n.code,{children:`figma-123456`}),`), если он не установлен вручную.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`статические-методы`,children:`Статические методы`}),`
`,(0,c.jsx)(n.h3,{id:`is`,children:(0,c.jsx)(n.code,{children:`is`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, совпадает ли предоставленный код с текущим кодом сообщения.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — Строка проверочного кода для сверки с внутренним кодом сессии.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если код совпадает.`]}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает текущий код сообщения, используемый для верификации в текущей сессии.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Устанавливает новый код сообщения. Этот метод может быть успешно выполнен только один раз; как только код установлен (или после первого обращения к `,(0,c.jsx)(n.code,{children:`get`}),`), сессия блокируется, и код больше не может быть изменен.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — Новое значение кода для использования в текущей сессии.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`рекомендации`,children:`Рекомендации`}),`
`,(0,c.jsxs)(n.p,{children:[`Для обеспечения стабильной и уникальной верификации рекомендуется использовать `,(0,c.jsx)(n.code,{children:`id`}),` из вашего файла `,(0,c.jsx)(n.code,{children:`manifest.json`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import manifest from '../manifest.json'
import { FigmaPostCode } from '@dxtmisha/figma'

// Установка кода верификации с использованием ID из манифеста
FigmaPostCode.set(manifest.id)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};