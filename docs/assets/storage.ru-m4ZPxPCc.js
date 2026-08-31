import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/3. Figma/4. Работа с хранилищем`}),`
`,(0,c.jsx)(t.h1,{id:`работа-с-хранилищем`,children:`Работа с хранилищем`}),`
`,(0,c.jsx)(t.p,{children:`Figma предоставляет два основных механизма сохранения данных: локальное хранилище пользователя и общее хранилище документа. Библиотека предлагает типизированные обертки для обоих методов, обеспечивая удобный доступ и синхронизацию.`}),`
`,(0,c.jsx)(t.h2,{id:`бэкенд-backend--plugincodets`,children:`Бэкенд (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(t.p,{children:`На стороне кода плагина необходимо инициализировать слушатели сообщений для синхронизации данных с интерфейсом.`}),`
`,(0,c.jsx)(t.h3,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setupStorage, setupClientStorage } from '@dxtmisha/figma-code'

// Активация слушателей для обоих типов хранилищ
setupStorage()
setupClientStorage()
`})}),`
`,(0,c.jsx)(t.h3,{id:`использование-напрямую`,children:`Использование напрямую`}),`
`,(0,c.jsx)(t.p,{children:`Вы можете работать с данными хранилища прямо в коде бэкенда:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaStorage, FigmaClientStorage } from '@dxtmisha/figma-code'

// Общее хранилище документа
const storage = FigmaStorage.getInstance<string>('project-theme')
storage.set('dark')

// Личное хранилище пользователя
const client = FigmaClientStorage.getInstance<boolean>('show-onboarding')
await client.set(true)
`})}),`
`,(0,c.jsx)(t.h2,{id:`интерфейс-ui--iframe`,children:`Интерфейс (UI / Iframe)`}),`
`,(0,c.jsx)(t.p,{children:`В интерфейсе плагина данные доступны через реактивные хуки, которые автоматически синхронизируются с бэкендом.`}),`
`,(0,c.jsx)(t.h3,{id:`реактивное-использование-vue`,children:`Реактивное использование (Vue)`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaStorage, useFigmaClientStorage } from '@dxtmisha/figma-ref'

// Синхронизация с документом
const { item: theme } = useFigmaStorage('project-theme', 'light')

// Синхронизация с личными настройками пользователя
const { item: isSeen } = useFigmaClientStorage('show-onboarding', false)

// При изменении .value данные автоматически улетают в Figma
theme.value = 'dark'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};