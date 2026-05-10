import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI Figma/# Работа с хранилищем`}),`
`,(0,c.jsx)(n.h1,{id:`работа-с-хранилищем`,children:`Работа с хранилищем`}),`
`,(0,c.jsx)(n.p,{children:`Figma предоставляет два основных механизма сохранения данных: локальное хранилище пользователя и общее хранилище документа. Библиотека предлагает типизированные обертки для обоих методов, обеспечивая удобный доступ и синхронизацию.`}),`
`,(0,c.jsx)(n.h2,{id:`бэкенд-backend--plugincodets`,children:`Бэкенд (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(n.p,{children:`На стороне кода плагина необходимо инициализировать слушатели сообщений для синхронизации данных с интерфейсом.`}),`
`,(0,c.jsx)(n.h3,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setupStorage, setupClientStorage } from '@dxtmisha/figma-code'

// Активация слушателей для обоих типов хранилищ
setupStorage()
setupClientStorage()
`})}),`
`,(0,c.jsx)(n.h3,{id:`использование-напрямую`,children:`Использование напрямую`}),`
`,(0,c.jsx)(n.p,{children:`Вы можете работать с данными хранилища прямо в коде бэкенда:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaStorage, FigmaClientStorage } from '@dxtmisha/figma-code'

// Общее хранилище документа
const storage = FigmaStorage.getInstance<string>('project-theme')
storage.set('dark')

// Личное хранилище пользователя
const client = FigmaClientStorage.getInstance<boolean>('show-onboarding')
await client.set(true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`интерфейс-ui--iframe`,children:`Интерфейс (UI / Iframe)`}),`
`,(0,c.jsx)(n.p,{children:`В интерфейсе плагина данные доступны через реактивные хуки, которые автоматически синхронизируются с бэкендом.`}),`
`,(0,c.jsx)(n.h3,{id:`реактивное-использование-vue`,children:`Реактивное использование (Vue)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaStorage, useFigmaClientStorage } from '@dxtmisha/figma-ref'

// Синхронизация с документом
const { item: theme } = useFigmaStorage('project-theme', 'light')

// Синхронизация с личными настройками пользователя
const { item: isSeen } = useFigmaClientStorage('show-onboarding', false)

// При изменении .value данные автоматически улетают в Figma
theme.value = 'dark'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};