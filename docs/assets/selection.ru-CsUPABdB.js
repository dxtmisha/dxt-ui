import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/# UI Figma/# Работа с выделением`}),`
`,(0,c.jsx)(t.h1,{id:`работа-с-выделением`,children:`Работа с выделением`}),`
`,(0,c.jsx)(t.p,{children:`Система выделения обеспечивает связь между холстом Figma и интерфейсом плагина. Она позволяет приложению реагировать на действия пользователя в редакторе и управлять фокусом программно.`}),`
`,(0,c.jsx)(t.h2,{id:`бэкенд-backend--plugincodets`,children:`Бэкенд (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(t.p,{children:`На стороне кода плагина необходимо инициализировать механизмы синхронизации и, при необходимости, использовать функции для программного фокуса.`}),`
`,(0,c.jsx)(t.h4,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Вызовите одну из функций в зависимости от требуемого уровня контроля:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`setupFrameSelection()`})}),` — Рекомендуется. Настраивает двустороннюю связь (отслеживание + программное выделение из UI).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`makeFigmaFrameSelection()`})}),` — Настраивает только отслеживание изменений на холсте Figma (Backend -> UI).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setupFrameSelection } from '@dxtmisha/figma-code'

// Вызывается один раз при старте плагина
setupFrameSelection()
`})}),`
`,(0,c.jsx)(t.h4,{id:`программное-управление`,children:`Программное управление`}),`
`,(0,c.jsx)(t.p,{children:`Если нужно выделить объект и сфокусировать на нем камеру прямо из кода бэкенда:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toFrameSelection } from '@dxtmisha/figma-code'

await toFrameSelection('12:34')
`})}),`
`,(0,c.jsx)(t.h2,{id:`интерфейс-ui--iframe`,children:`Интерфейс (UI / Iframe)`}),`
`,(0,c.jsx)(t.p,{children:`Инструменты для получения данных о текущем выделении и подачи команд на его изменение из интерфейса плагина.`}),`
`,(0,c.jsx)(t.h4,{id:`реактивное-использование-vue`,children:`Реактивное использование (Vue)`}),`
`,(0,c.jsxs)(t.p,{children:[`Самый удобный способ работы через композитор `,(0,c.jsx)(t.code,{children:`useFigmaFrameSelection`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaFrameSelection } from '@dxtmisha/figma-ref'

const { 
  selection,    // Список выделенных фреймов (ComputedRef)
  setSelection, // Метод для смены выделения: setSelection(id)
  loading       // Состояние загрузки
} = useFigmaFrameSelection()
`})}),`
`,(0,c.jsx)(t.h4,{id:`прямое-управление-javascript`,children:`Прямое управление (JavaScript)`}),`
`,(0,c.jsx)(t.p,{children:`Если вы не используете Vue, можно отправить команду или вручную подписаться на изменения:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { sendFrameSelection, fetchFrameSelection } from '@dxtmisha/figma'

// Сменить выделение
sendFrameSelection('12:34')

// Подписаться на изменения вручную
fetchFrameSelection((selection) => {
  console.log('Текущее выделение:', selection)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};