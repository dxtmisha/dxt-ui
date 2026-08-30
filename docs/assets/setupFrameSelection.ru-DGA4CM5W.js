import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-code/Functions/setupFrameSelection - Настройка двустороннего выделения`}),`
`,(0,c.jsx)(t.h1,{id:`setupframeselection`,children:(0,c.jsx)(t.code,{children:`setupFrameSelection`})}),`
`,(0,c.jsx)(t.p,{children:`Настраивает двустороннее управление выделением фреймов между бэкендом Figma и интерфейсом плагина. Эта одна функция отвечает как за автоматическое отслеживание текущего выделения пользователя, так и за программное выделение объектов из интерфейса.`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Отслеживание выделения`}),` — Автоматически вызывает `,(0,c.jsx)(t.code,{children:`makeFigmaFrameSelection()`}),`, которая начинает наблюдать за изменениями выделения в Figma и отправляет подробные данные (имена, ID, скриншоты) в UI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Дистанционное управление`}),` — Регистрирует слушатель сообщения `,(0,c.jsx)(t.code,{children:`UI_FIGMA_FRAME_SET_SELECTION`}),`. Когда UI отправляет это сообщение с ID объекта, бэкенд находит его, выделяет и фокусирует камеру на нем.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setupFrameSelection } from '@dxtmisha/figma-code'

// Вызовите это при инициализации бэкенда плагина
setupFrameSelection()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};