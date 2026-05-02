import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/AiDoc - Движок AI-документирования`}),`
`,(0,c.jsx)(n.h1,{id:`класс-aidoc`,children:`Класс AiDoc`}),`
`,(0,c.jsx)(n.p,{children:`Центральный движок для координации процесса генерации AI-документации во всем проекте. Он управляет чтением конфигурации, сканированием директорий и делегированием задач по документированию специализированным обработчикам ИИ.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Пакетная обработка`}),` — автоматически перебирает настроенные директории для генерации документации сразу для множества файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция на уровне проекта`}),` — считывает настройки проекта через `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` для определения целевых путей и областей охвата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с Git`}),` — использует `,(0,c.jsx)(n.code,{children:`GitRead`}),` для идентификации релевантных файлов и их фильтрации на основе статуса репозитория.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Устойчивость к ошибкам`}),` — надежная обработка исключений в процессе документирования для обеспечения стабильной работы или четкого сообщения о проблемах.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`AiDoc`}),` обычно инициализируется как основной координатор для запуска процесса сборки документации.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiDoc } from '@dxtmisha/scripts'

const engine = new AiDoc()

// Запуск обработки всех настроенных директорий
await engine.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — основная точка входа. Считывает конфигурацию и запускает обработку всех определенных директорий документации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`makeDirectory(dir: string): Promise<void>`}),` — обрабатывает все соответствующие файлы внутри конкретной директории, делегируя задачи специализированным обработчикам ИИ.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Высокоуровневый координатор, который не предоставляет открытых свойств конфигурации или сложного внутреннего состояния.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};