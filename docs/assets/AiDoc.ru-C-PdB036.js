import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiDoc - Движок AI-документирования`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aidoc`,children:`Класс AiDoc`}),`
`,(0,c.jsx)(t.p,{children:`Центральный движок для координации процесса генерации AI-документации во всем проекте. Он управляет чтением конфигурации, сканированием директорий и делегированием задач по документированию специализированным обработчикам ИИ.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Пакетная обработка`}),` — автоматически перебирает настроенные директории для генерации документации сразу для множества файлов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция на уровне проекта`}),` — считывает настройки проекта через `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` для определения целевых путей и областей охвата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с Git`}),` — использует `,(0,c.jsx)(t.code,{children:`GitRead`}),` для идентификации релевантных файлов и их фильтрации на основе статуса репозитория.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Устойчивость к ошибкам`}),` — надежная обработка исключений в процессе документирования для обеспечения стабильной работы или четкого сообщения о проблемах.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`AiDoc`}),` обычно инициализируется как основной координатор для запуска процесса сборки документации.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiDoc } from '@dxtmisha/scripts'

const engine = new AiDoc()

// Запуск обработки всех настроенных директорий
await engine.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — основная точка входа. Считывает конфигурацию и запускает обработку всех определенных директорий документации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`makeDirectory(dir: string): Promise<void>`}),` — обрабатывает все соответствующие файлы внутри конкретной директории, делегируя задачи специализированным обработчикам ИИ.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Высокоуровневый координатор, который не предоставляет открытых свойств конфигурации или сложного внутреннего состояния.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};