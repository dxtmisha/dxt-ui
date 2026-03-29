import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/resizeImageByMax - Изменение размера изображения по максимальной стороне`}),`
`,(0,c.jsx)(n.h1,{id:`resizeimagebymax`,children:(0,c.jsx)(n.code,{children:`resizeImageByMax`})}),`
`,(0,c.jsx)(n.p,{children:`Изменяет размер изображения пропорционально, чтобы оно вписывалось в заданные ограничения максимального размера (по ширине, высоте или автоматически по большей стороне). Возвращает Data URL с уменьшенным изображением в формате Base64.`}),`
`,(0,c.jsx)(n.p,{children:`Функция полезна для сжатия изображений на лету перед их отправкой на сервер.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: HTMLImageElement | string`}),` — Элемент изображения или URL-адрес.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maxSize: number`}),` — Максимальный допустимый размер в пикселях (для ширины или высоты).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: ResizeImageByMaxType`}),` — Стратегия масштабирования: `,(0,c.jsx)(n.code,{children:`'auto'`}),`, `,(0,c.jsx)(n.code,{children:`'width'`}),`, или `,(0,c.jsx)(n.code,{children:`'height'`}),`. По умолчанию `,(0,c.jsx)(n.code,{children:`'auto'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`typeData?: string`}),` — Опциональный MIME-тип для результирующего Data URL (например, `,(0,c.jsx)(n.code,{children:`'image/jpeg'`}),`). По умолчанию `,(0,c.jsx)(n.code,{children:`'image/png'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string | undefined`}),` — Строка Data URL с изображением нового размера, или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если изображение невозможно обработать или оно меньше/равно `,(0,c.jsx)(n.code,{children:`maxSize`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { resizeImageByMax } from '@dxtmisha/functional-basic'

const imgElement = document.querySelector('img')
const resizedDataUrl = resizeImageByMax(imgElement, 800)

console.log(resizedDataUrl) 
// 'data:image/png;base64,iVBORw0KGgo...'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};