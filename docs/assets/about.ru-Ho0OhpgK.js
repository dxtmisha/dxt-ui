import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/1. UI/properties/# О файле properties.json`}),`
`,(0,c.jsx)(t.h1,{id:`конфигурация-propertiesjson`,children:`Конфигурация (properties.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`Файл `,(0,c.jsx)(t.code,{children:`properties.json`}),` является декларативным манифестом вашего компонента. В нем вы описываете структуру, стили, состояния и параметры, которые затем автоматически преобразуются в готовый SCSS-код и типизированные TypeScript-интерфейсы (`,(0,c.jsx)(t.code,{children:`props.ts`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`как-работать-с-этим-файлом`,children:`Как работать с этим файлом?`}),`
`,(0,c.jsxs)(t.p,{children:[`Вместо того чтобы вручную писать сотни строк CSS для каждого псевдокласса или медиа-запроса, вы наполняете `,(0,c.jsx)(t.strong,{children:`дерево свойств`}),`. Система анализирует этот файл и выполняет всю рутинную работу:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация стилей (SCSS)`}),`: Создает классы по методологии BEM, переменные и темы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация интерфейса (Props)`}),`: Формирует публичные свойства компонента для Vue/React.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронизация`}),`: Гарантирует, что стили и программный интерфейс всегда соответствуют друг другу.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`основная-концепция`,children:`Основная концепция`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Токены (Tokens)`}),`: Узлы дерева JSON, описывающие конкретные CSS-свойства или вложенные объекты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Типы и Флаги (_type, _var...)`}),`: Служебные параметры, определяющие логику обработки узла (генерация переменной, состояния или экспорт в Props).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ссылки (Links)`}),`: Система `,(0,c.jsx)(t.code,{children:`{...}`}),`, позволяющая заимствовать значения из других токенов или глобальных переменных дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Маркеры и Шорткаты`}),`: Специальные префиксы (`,(0,c.jsx)(t.code,{children:`~`}),`, `,(0,c.jsx)(t.code,{children:`group|`}),`) и подстановки (`,(0,c.jsx)(t.code,{children:`?`}),`, `,(0,c.jsx)(t.code,{children:`??`}),`), ускоряющие написание сложных конфигураций.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};