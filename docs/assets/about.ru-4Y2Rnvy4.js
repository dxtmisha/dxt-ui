import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/properties/! О файле properties.json`}),`
`,(0,c.jsx)(n.h1,{id:`конфигурация-propertiesjson`,children:`Конфигурация (properties.json)`}),`
`,(0,c.jsxs)(n.p,{children:[`Файл `,(0,c.jsx)(n.code,{children:`properties.json`}),` является декларативным манифестом вашего компонента. В нем вы описываете структуру, стили, состояния и параметры, которые затем автоматически преобразуются в готовый SCSS-код и типизированные TypeScript-интерфейсы (`,(0,c.jsx)(n.code,{children:`props.ts`}),`).`]}),`
`,(0,c.jsx)(n.h2,{id:`как-работать-с-этим-файлом`,children:`Как работать с этим файлом?`}),`
`,(0,c.jsxs)(n.p,{children:[`Вместо того чтобы вручную писать сотни строк CSS для каждого псевдокласса или медиа-запроса, вы наполняете `,(0,c.jsx)(n.strong,{children:`дерево свойств`}),`. Система анализирует этот файл и выполняет всю рутинную работу:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация стилей (SCSS)`}),`: Создает классы по методологии BEM, переменные и темы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация интерфейса (Props)`}),`: Формирует публичные свойства компонента для Vue/React.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронизация`}),`: Гарантирует, что стили и программный интерфейс всегда соответствуют друг другу.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`основная-концепция`,children:`Основная концепция`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Токены (Tokens)`}),`: Узлы дерева JSON, описывающие конкретные CSS-свойства или вложенные объекты.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Типы и Флаги (_type, _var...)`}),`: Служебные параметры, определяющие логику обработки узла (генерация переменной, состояния или экспорт в Props).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ссылки (Links)`}),`: Система `,(0,c.jsx)(n.code,{children:`{...}`}),`, позволяющая заимствовать значения из других токенов или глобальных переменных дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Маркеры и Шорткаты`}),`: Специальные префиксы (`,(0,c.jsx)(n.code,{children:`~`}),`, `,(0,c.jsx)(n.code,{children:`group|`}),`) и подстановки (`,(0,c.jsx)(n.code,{children:`?`}),`, `,(0,c.jsx)(n.code,{children:`??`}),`), ускоряющие написание сложных конфигураций.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};