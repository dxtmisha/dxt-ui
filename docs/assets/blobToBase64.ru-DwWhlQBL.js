import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-DeABI6Wb.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/blobToBase64 - Преобразование Blob в Base64`}),`
`,(0,l.jsx)(n.h1,{id:`blobtobase64`,children:(0,l.jsx)(n.code,{children:`blobToBase64`})}),`
`,(0,l.jsxs)(n.p,{children:[`Асинхронно преобразует объекты `,(0,l.jsx)(n.code,{children:`Blob`}),` или `,(0,l.jsx)(n.code,{children:`File`}),` в строку формата Base64 (Data URL).`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`blob: Blob`}),` — Объект `,(0,l.jsx)(n.code,{children:`Blob`}),` (или `,(0,l.jsx)(n.code,{children:`File`}),`) для преобразования.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`clean: boolean = false`}),` — Если `,(0,l.jsx)(n.code,{children:`true`}),`, удаляет префикс Data URL (например, `,(0,l.jsx)(n.code,{children:`data:image/png;base64,`}),`).`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Среда выполнения:`}),`
Утилита автоматически определяет доступный метод конвертации:`]}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Браузер`}),`: Использует `,(0,l.jsx)(n.code,{children:`FileReader`}),` для чтения содержимого.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Сервер (SSR)`}),`: Использует `,(0,l.jsx)(n.code,{children:`Buffer`}),` и асинхронный метод `,(0,l.jsx)(n.code,{children:`blob.arrayBuffer()`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`Promise<string | undefined>`}),` — Строка Base64 или `,(0,l.jsx)(n.code,{children:`undefined`}),`, если конвертация невозможна.`]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};