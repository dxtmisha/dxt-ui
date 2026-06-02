import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma/Classes/FigmaPostCode - Проверка сообщений`}),`
`,(0,c.jsx)(n.h1,{id:`класс-figmapostcode`,children:`Класс FigmaPostCode`}),`
`,(0,c.jsx)(n.p,{children:`Утилитарный класс для управления уникальным кодом верификации, используемым для обеспечения целостности сообщений между плагином Figma (backend) и его UI (frontend). Это гарантирует, что сообщения, полученные одной стороной, действительно были отправлены другой стороной той же сессии плагина.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасность`}),` — Предотвращает вмешательство сообщений от других плагинов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Блокировка сессии`}),` — Код может быть установлен только один раз за сессию, что обеспечивает согласованность.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автогенерация`}),` — По умолчанию генерируется случайный код (например, `,(0,c.jsx)(n.code,{children:`figma-123456`}),`), если он не установлен вручную.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`статические-методы`,children:`Статические методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(code: string): boolean`}),` — Проверяет, совпадает ли предоставленный код с текущим кодом сообщения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): string`}),` — Возвращает текущий код сообщения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(code: string): void`}),` — Устанавливает новый код сообщения. Можно вызвать только один раз.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`рекомендации`,children:`Рекомендации`}),`
`,(0,c.jsxs)(n.p,{children:[`Для обеспечения стабильной и уникальной верификации рекомендуется использовать `,(0,c.jsx)(n.code,{children:`id`}),` из вашего файла `,(0,c.jsx)(n.code,{children:`manifest.json`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import manifest from '../manifest.json'
import { FigmaPostCode } from '@dxtmisha/figma'

// Установка кода верификации с использованием ID из манифеста
FigmaPostCode.set(manifest.id)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};