import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-code/Functions/makeFigmaFrameSelection - Отслеживание выделения`}),`
`,(0,c.jsx)(t.h1,{id:`makefigmaframeselection`,children:(0,c.jsx)(t.code,{children:`makeFigmaFrameSelection`})}),`
`,(0,c.jsxs)(t.p,{children:[`Активирует глобальный слушатель события `,(0,c.jsx)(t.code,{children:`selectionchange`}),` в Figma. Используется для синхронизации состояния выбранных элементов между песочницей Figma (Backend) и интерфейсом плагина (Frontend).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Функция предназначена для использования на стороне кода (Backend) плагина Figma. Она автоматически подписывается на изменения выделения пользователя. При каждом изменении данные о выбранных элементах (включая имена, идентификаторы и скриншоты в формате JPG) собираются и отправляются в пользовательский интерфейс (UI) через `,(0,c.jsx)(t.code,{children:`FigmaPluginMessenger`}),`. Это избавляет от необходимости вручную настраивать слушатели событий и обрабатывать экспорт изображений для каждого выбранного объекта.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { makeFigmaFrameSelection } from '@dxtmisha/figma-code'

// Инициализация в коде плагина (Backend)
makeFigmaFrameSelection()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};