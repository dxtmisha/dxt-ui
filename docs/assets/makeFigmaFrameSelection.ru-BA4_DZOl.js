import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Functions/makeFigmaFrameSelection - Отслеживание выделения`}),`
`,(0,c.jsx)(n.h1,{id:`makefigmaframeselection`,children:(0,c.jsx)(n.code,{children:`makeFigmaFrameSelection`})}),`
`,(0,c.jsxs)(n.p,{children:[`Активирует глобальный слушатель события `,(0,c.jsx)(n.code,{children:`selectionchange`}),` в Figma. Используется для синхронизации состояния выбранных элементов между песочницей Figma (Backend) и интерфейсом плагина (Frontend).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Функция предназначена для использования на стороне кода (Backend) плагина Figma. Она автоматически подписывается на изменения выделения пользователя. При каждом изменении данные о выбранных элементах (включая имена, идентификаторы и скриншоты в формате JPG) собираются и отправляются в пользовательский интерфейс (UI) через `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),`. Это избавляет от необходимости вручную настраивать слушатели событий и обрабатывать экспорт изображений для каждого выбранного объекта.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { makeFigmaFrameSelection } from '@dxtmisha/figma-code'

// Инициализация в коде плагина (Backend)
makeFigmaFrameSelection()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};