import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-ref/Composables/useFigmaClientStorage - Управление клиентским хранилищем`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmaclientstorage`,children:(0,c.jsx)(n.code,{children:`useFigmaClientStorage`})}),`
`,(0,c.jsxs)(n.p,{children:[`Реактивная обертка для клиентского хранилища Figma. Она синхронизирует Vue `,(0,c.jsx)(n.code,{children:`shallowRef`}),` с `,(0,c.jsx)(n.code,{children:`clientStorage`}),` плагина, обеспечивая постоянное хранение данных на машине пользователя с автоматическим обновлением.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — название ключа в клиентском хранилище.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T`}),` — значение по умолчанию, если в хранилище ничего не найдено.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<T | undefined>`}),` — реактивная ссылка на сохраненное значение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — реактивный флаг, указывающий на процесс первичного получения данных.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaClientStorage } from '@dxtmisha/figma-ref'

const { item: theme, loading } = useFigmaClientStorage('app-theme', 'light')

// Изменения theme.value автоматически сохраняются в clientStorage Figma
theme.value = 'dark'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};