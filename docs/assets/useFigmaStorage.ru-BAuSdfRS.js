import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-code/Composables/useFigmaStorage - Управление хранилищем`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmastorage`,children:(0,c.jsx)(t.code,{children:`useFigmaStorage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable для управления данными в `,(0,c.jsx)(t.code,{children:`PluginData`}),` Figma. Использует паттерн singleton, гарантируя, что несколько вызовов с одинаковым ключом и узлом вернут один и тот же экземпляр `,(0,c.jsx)(t.code,{children:`FigmaStorage`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — уникальное имя ключа для элемента хранилища.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item?: PluginDataMixin`}),` — (Опционально) узел Figma, в котором хранятся данные. По умолчанию — `,(0,c.jsx)(t.code,{children:`figma.root`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cache?: number`}),` — (Опционально) время кэширования в секундах (TTL).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`FigmaStorage<T>`}),` — экземпляр класса `,(0,c.jsx)(t.code,{children:`FigmaStorage`}),` для управления данными.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaStorage } from '@dxtmisha/figma-code'

// 1. Инициализация хранилища для настроек плагина
const settings = useFigmaStorage('settings')

// 2. Получение данных со значением по умолчанию
const theme = settings.get('dark')

// 3. Обновление данных
settings.set('light')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};