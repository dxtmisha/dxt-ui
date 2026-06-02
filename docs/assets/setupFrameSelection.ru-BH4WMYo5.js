import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Functions/setupFrameSelection - Настройка двустороннего выделения`}),`
`,(0,c.jsx)(n.h1,{id:`setupframeselection`,children:(0,c.jsx)(n.code,{children:`setupFrameSelection`})}),`
`,(0,c.jsx)(n.p,{children:`Настраивает двустороннее управление выделением фреймов между бэкендом Figma и интерфейсом плагина. Эта одна функция отвечает как за автоматическое отслеживание текущего выделения пользователя, так и за программное выделение объектов из интерфейса.`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отслеживание выделения`}),` — Автоматически вызывает `,(0,c.jsx)(n.code,{children:`makeFigmaFrameSelection()`}),`, которая начинает наблюдать за изменениями выделения в Figma и отправляет подробные данные (имена, ID, скриншоты) в UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Дистанционное управление`}),` — Регистрирует слушатель сообщения `,(0,c.jsx)(n.code,{children:`UI_FIGMA_FRAME_SET_SELECTION`}),`. Когда UI отправляет это сообщение с ID объекта, бэкенд находит его, выделяет и фокусирует камеру на нем.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setupFrameSelection } from '@dxtmisha/figma-code'

// Вызовите это при инициализации бэкенда плагина
setupFrameSelection()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};