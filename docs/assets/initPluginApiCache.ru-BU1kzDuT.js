import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/nitro-basic/Functions/initPluginApiCache - Инициализация кэша API`}),`
`,(0,c.jsx)(t.h1,{id:`initpluginapicache`,children:(0,c.jsx)(t.code,{children:`initPluginApiCache`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция для настройки и инициализации системы кэширования API. Она использует встроенное хранилище Nitro (`,(0,c.jsx)(t.code,{children:`useStorage`}),`) для сохранения, получения и удаления элементов кэша. Также включает обработку ошибок через `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`storageKey: string`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`'Ui_ApiCache'`}),`) — Префикс ключа для хранилища Nitro.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cacheStepAgeClearOld?: number`}),` — Порог возраста кэша для автоматической очистки устаревших данных.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initPluginApiCache } from '@dxtmisha/nitro-basic'

initPluginApiCache('my-custom-cache', 3600)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};