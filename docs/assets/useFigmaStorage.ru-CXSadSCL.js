import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-ref/Composables/useFigmaStorage - Управление хранилищем документа`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmastorage`,children:(0,c.jsx)(t.code,{children:`useFigmaStorage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Реактивная обертка для общего хранилища Figma (PluginData). Она синхронизирует Vue `,(0,c.jsx)(t.code,{children:`shallowRef`}),` с данными, хранящимися внутри документа Figma (глобально или на конкретном узле), обеспечивая общий доступ к данным для всех пользователей файла.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — название ключа в хранилище плагина.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T`}),` — значение по умолчанию, если в хранилище ничего не найдено.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id?: string`}),` — (Опционально) идентификатор (ID) узла, к которому привязано хранилище. Если не указан, используется корень документа.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: Ref<T | undefined>`}),` — реактивная ссылка на сохраненное значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — реактивный флаг, указывающий на процесс первичного получения данных.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaStorage } from '@dxtmisha/figma-ref'

// Доступ к хранилищу на уровне документа
const { item: projectConfig, loading } = useFigmaStorage('project-config', { version: '1.0' })

// Изменения автоматически сохраняются в PluginData Figma
projectConfig.value.version = '1.1'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};