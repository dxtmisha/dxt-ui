import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiClaude - Сервис-класс Claude AI`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aiclaude`,children:`Класс AiClaude`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`AiClaude`}),` представляет собой конкретную реализацию `,(0,c.jsx)(t.code,{children:`AiClaudeLite`}),`, которая автоматически интегрируется с настройками окружения проекта. Он инициализирует клиент Anthropic AI, используя учетные данные, загруженные через функцию `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая конфигурация`}),` — автоматически загружает API-ключи и модели по умолчанию с помощью `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Наследуемый функционал Claude`}),` — поддерживает все возможности `,(0,c.jsx)(t.code,{children:`AiClaudeLite`}),`, включая мультимодальный ввод (изображения), накопление промптов и генерацию текста.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`AiClaude`}),` может быть инициализирован напрямую без аргументов конструктора, так как он автоматически извлекает учетные данные из окружения.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiClaude } from '@dxtmisha/scripts'

const ai = new AiClaude()

// Установка модели (опционально, если модель по умолчанию не задана или требует переопределения)
ai.setModel('claude-3-5-sonnet-20241022')

// Накопление контекста
ai.addPrompt('Вы — полезный помощник.')

// Генерация текста
const response = await ai.generate('Объясните квантовые вычисления.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(t.p,{children:[`Этот класс не определяет дополнительных публичных методов. Он наследует все методы настройки и выполнения из `,(0,c.jsx)(t.code,{children:`AiClaudeLite`}),` и `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};