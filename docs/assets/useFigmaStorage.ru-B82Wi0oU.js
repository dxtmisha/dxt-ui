import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-ref/Composables/useFigmaStorage - Управление хранилищем документа`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmastorage`,children:(0,c.jsx)(n.code,{children:`useFigmaStorage`})}),`
`,(0,c.jsxs)(n.p,{children:[`Реактивная обертка для общего хранилища Figma (PluginData). Она синхронизирует Vue `,(0,c.jsx)(n.code,{children:`shallowRef`}),` с данными, хранящимися внутри документа Figma (глобально или на конкретном узле), обеспечивая общий доступ к данным для всех пользователей файла.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — название ключа в хранилище плагина.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T`}),` — значение по умолчанию, если в хранилище ничего не найдено.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id?: string`}),` — (Опционально) идентификатор (ID) узла, к которому привязано хранилище. Если не указан, используется корень документа.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<T | undefined>`}),` — реактивная ссылка на сохраненное значение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — реактивный флаг, указывающий на процесс первичного получения данных.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaStorage } from '@dxtmisha/figma-ref'

// Доступ к хранилищу на уровне документа
const { item: projectConfig, loading } = useFigmaStorage('project-config', { version: '1.0' })

// Изменения автоматически сохраняются в PluginData Figma
projectConfig.value.version = '1.1'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};