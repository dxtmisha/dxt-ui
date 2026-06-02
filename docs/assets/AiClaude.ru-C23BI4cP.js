import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/AiClaude - Сервис-класс Claude AI`}),`
`,(0,c.jsx)(n.h1,{id:`класс-aiclaude`,children:`Класс AiClaude`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`AiClaude`}),` представляет собой конкретную реализацию `,(0,c.jsx)(n.code,{children:`AiClaudeLite`}),`, которая автоматически интегрируется с настройками окружения проекта. Он инициализирует клиент Anthropic AI, используя учетные данные, загруженные через функцию `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая конфигурация`}),` — автоматически загружает API-ключи и модели по умолчанию с помощью `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Наследуемый функционал Claude`}),` — поддерживает все возможности `,(0,c.jsx)(n.code,{children:`AiClaudeLite`}),`, включая мультимодальный ввод (изображения), накопление промптов и генерацию текста.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`AiClaude`}),` может быть инициализирован напрямую без аргументов конструктора, так как он автоматически извлекает учетные данные из окружения.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiClaude } from '@dxtmisha/scripts'

const ai = new AiClaude()

// Установка модели (опционально, если модель по умолчанию не задана или требует переопределения)
ai.setModel('claude-3-5-sonnet-20241022')

// Накопление контекста
ai.addPrompt('Вы — полезный помощник.')

// Генерация текста
const response = await ai.generate('Объясните квантовые вычисления.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.p,{children:[`Этот класс не определяет дополнительных публичных методов. Он наследует все методы настройки и выполнения из `,(0,c.jsx)(n.code,{children:`AiClaudeLite`}),` и `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};