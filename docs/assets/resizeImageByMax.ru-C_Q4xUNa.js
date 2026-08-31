import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/resizeImageByMax - Изменение размера изображения по максимальной стороне`}),`
`,(0,c.jsx)(t.h1,{id:`resizeimagebymax`,children:(0,c.jsx)(t.code,{children:`resizeImageByMax`})}),`
`,(0,c.jsx)(t.p,{children:`Изменяет размер изображения пропорционально, чтобы оно вписывалось в заданные ограничения максимального размера (по ширине, высоте или автоматически по большей стороне). Возвращает Data URL с уменьшенным изображением в формате Base64.`}),`
`,(0,c.jsx)(t.p,{children:`Функция полезна для сжатия изображений на лету перед их отправкой на сервер.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: HTMLImageElement | string`}),` — Элемент изображения или URL-адрес.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxSize: number`}),` — Максимальный допустимый размер в пикселях (для ширины или высоты).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: ResizeImageByMaxType`}),` — Стратегия масштабирования: `,(0,c.jsx)(t.code,{children:`'auto'`}),`, `,(0,c.jsx)(t.code,{children:`'width'`}),`, или `,(0,c.jsx)(t.code,{children:`'height'`}),`. По умолчанию `,(0,c.jsx)(t.code,{children:`'auto'`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typeData?: string`}),` — Опциональный MIME-тип для результирующего Data URL (например, `,(0,c.jsx)(t.code,{children:`'image/jpeg'`}),`). По умолчанию `,(0,c.jsx)(t.code,{children:`'image/png'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string | undefined`}),` — Строка Data URL с изображением нового размера, или `,(0,c.jsx)(t.code,{children:`undefined`}),`, если изображение невозможно обработать или оно меньше/равно `,(0,c.jsx)(t.code,{children:`maxSize`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { resizeImageByMax } from '@dxtmisha/functional-basic'

const imgElement = document.querySelector('img')
const resizedDataUrl = resizeImageByMax(imgElement, 800)

console.log(resizedDataUrl) 
// 'data:image/png;base64,iVBORw0KGgo...'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};