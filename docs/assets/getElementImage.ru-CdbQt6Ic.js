import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getElementImage - Получение элемента изображения`}),`
`,(0,c.jsx)(t.h1,{id:`getelementimage`,children:(0,c.jsx)(t.code,{children:`getElementImage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Служит для безопасного получения узла `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),`. Если на вход подана строка (ссылка на изображение), функция создаёт новый тег `,(0,c.jsx)(t.code,{children:`<img>`}),`, опционально привязывает обработчики событий `,(0,c.jsx)(t.code,{children:`onload`}),` и `,(0,c.jsx)(t.code,{children:`onerror`}),`, а затем назначает ссылку в `,(0,c.jsx)(t.code,{children:`src`}),`. Если на вход уже передан объект изображения `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),`, он возвращается сразу без изменений.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image?: HTMLImageElement | string`}),` — Элемент изображения или строковый источник (URL / Base64 / Blob URL).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onload?: GetElementImageCallback`}),` (`,(0,c.jsx)(t.code,{children:`(image: HTMLImageElement, event?: Event | string) => void`}),`) — Опциональный колбэк успешной загрузки изображения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onerror?: GetElementImageCallback`}),` (`,(0,c.jsx)(t.code,{children:`(image: HTMLImageElement, event?: Event | string) => void`}),`) — Опциональный колбэк ошибки загрузки изображения.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`HTMLImageElement | undefined`}),` — Готовый к использованию тег `,(0,c.jsx)(t.code,{children:`<img>`}),`, либо `,(0,c.jsx)(t.code,{children:`undefined`}),`, если окружение не позволяет его создать (например, в SSR) или если аргумент `,(0,c.jsx)(t.code,{children:`image`}),` не передан.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementImage } from '@dxtmisha/functional-basic'

// 1. Простое создание тега по строковому URL
const img1 = getElementImage('/path/to/image.png')
console.log(img1 instanceof HTMLImageElement) // true
console.log(img1?.src) // 'http://.../path/to/image.png'

// 2. Создание с отслеживанием загрузки и ошибок
const imgWithEvents = getElementImage(
  '/path/to/avatar.jpg',
  (image) => console.log('Картинка успешно загрузилась:', image.naturalWidth),
  (image) => console.error('Ошибка загрузки картинки:', image.src)
)

// 3. Передача существующего тега img (возвращается без изменений)
const existingImg = document.createElement('img')
const img2 = getElementImage(existingImg)
console.log(img2 === existingImg) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};