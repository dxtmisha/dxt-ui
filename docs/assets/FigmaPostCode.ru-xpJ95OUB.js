import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma/Classes/FigmaPostCode - Проверка сообщений`}),`
`,(0,c.jsx)(t.h1,{id:`класс-figmapostcode`,children:`Класс FigmaPostCode`}),`
`,(0,c.jsx)(t.p,{children:`Утилитарный класс для управления уникальным кодом верификации, используемым для обеспечения целостности сообщений между плагином Figma (backend) и его UI (frontend). Это гарантирует, что сообщения, полученные одной стороной, действительно были отправлены другой стороной той же сессии плагина.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасность`}),` — Предотвращает вмешательство сообщений от других плагинов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Блокировка сессии`}),` — Код может быть установлен только один раз за сессию, что обеспечивает согласованность.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автогенерация`}),` — По умолчанию генерируется случайный код (например, `,(0,c.jsx)(t.code,{children:`figma-123456`}),`), если он не установлен вручную.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`статические-методы`,children:`Статические методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(code: string): boolean`}),` — Проверяет, совпадает ли предоставленный код с текущим кодом сообщения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): string`}),` — Возвращает текущий код сообщения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(code: string): void`}),` — Устанавливает новый код сообщения. Можно вызвать только один раз.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`рекомендации`,children:`Рекомендации`}),`
`,(0,c.jsxs)(t.p,{children:[`Для обеспечения стабильной и уникальной верификации рекомендуется использовать `,(0,c.jsx)(t.code,{children:`id`}),` из вашего файла `,(0,c.jsx)(t.code,{children:`manifest.json`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import manifest from '../manifest.json'
import { FigmaPostCode } from '@dxtmisha/figma'

// Установка кода верификации с использованием ID из манифеста
FigmaPostCode.set(manifest.id)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};