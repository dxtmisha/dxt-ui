import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/functional-basic/Functions/blobToBase64 - Преобразование Blob в Base64`}),`
`,(0,l.jsx)(t.h1,{id:`blobtobase64`,children:(0,l.jsx)(t.code,{children:`blobToBase64`})}),`
`,(0,l.jsxs)(t.p,{children:[`Асинхронно преобразует объекты `,(0,l.jsx)(t.code,{children:`Blob`}),` или `,(0,l.jsx)(t.code,{children:`File`}),` в строку формата Base64 (Data URL).`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`blob: Blob`}),` — Объект `,(0,l.jsx)(t.code,{children:`Blob`}),` (или `,(0,l.jsx)(t.code,{children:`File`}),`) для преобразования.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`clean: boolean = false`}),` — Если `,(0,l.jsx)(t.code,{children:`true`}),`, удаляет префикс Data URL (например, `,(0,l.jsx)(t.code,{children:`data:image/png;base64,`}),`).`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Среда выполнения:`}),`
Утилита автоматически определяет доступный метод конвертации:`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Браузер`}),`: Использует `,(0,l.jsx)(t.code,{children:`FileReader`}),` для чтения содержимого.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Сервер (SSR)`}),`: Использует `,(0,l.jsx)(t.code,{children:`Buffer`}),` и асинхронный метод `,(0,l.jsx)(t.code,{children:`blob.arrayBuffer()`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`Promise<string | undefined>`}),` — Строка Base64 или `,(0,l.jsx)(t.code,{children:`undefined`}),`, если конвертация невозможна.`]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { blobToBase64 } from '@dxtmisha/functional-basic'

// 1. По умолчанию (возвращает Data URL)
const dataUrl = await blobToBase64(file)
// 'data:image/png;base64,iVBORw0KGgo...'

// 2. Чистый Base64 (без префикса)
const rawBase64 = await blobToBase64(file, true)
// 'iVBORw0KGgo...'

// 3. Обработка случая недоступности API
const result = await blobToBase64(blob)
if (result) {
// работа со строкой
}
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};