import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI Figma/# Работа с выделением`}),`
`,(0,c.jsx)(n.h1,{id:`работа-с-выделением`,children:`Работа с выделением`}),`
`,(0,c.jsx)(n.p,{children:`Система выделения обеспечивает связь между холстом Figma и интерфейсом плагина. Она позволяет приложению реагировать на действия пользователя в редакторе и управлять фокусом программно.`}),`
`,(0,c.jsx)(n.h2,{id:`бэкенд-backend--plugincodets`,children:`Бэкенд (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(n.p,{children:`На стороне кода плагина необходимо инициализировать механизмы синхронизации и, при необходимости, использовать функции для программного фокуса.`}),`
`,(0,c.jsx)(n.h4,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Вызовите одну из функций в зависимости от требуемого уровня контроля:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`setupFrameSelection()`})}),` — Рекомендуется. Настраивает двустороннюю связь (отслеживание + программное выделение из UI).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`makeFigmaFrameSelection()`})}),` — Настраивает только отслеживание изменений на холсте Figma (Backend -> UI).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setupFrameSelection } from '@dxtmisha/figma-code'

// Вызывается один раз при старте плагина
setupFrameSelection()
`})}),`
`,(0,c.jsx)(n.h4,{id:`программное-управление`,children:`Программное управление`}),`
`,(0,c.jsx)(n.p,{children:`Если нужно выделить объект и сфокусировать на нем камеру прямо из кода бэкенда:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toFrameSelection } from '@dxtmisha/figma-code'

await toFrameSelection('12:34')
`})}),`
`,(0,c.jsx)(n.h2,{id:`интерфейс-ui--iframe`,children:`Интерфейс (UI / Iframe)`}),`
`,(0,c.jsx)(n.p,{children:`Инструменты для получения данных о текущем выделении и подачи команд на его изменение из интерфейса плагина.`}),`
`,(0,c.jsx)(n.h4,{id:`реактивное-использование-vue`,children:`Реактивное использование (Vue)`}),`
`,(0,c.jsxs)(n.p,{children:[`Самый удобный способ работы через композитор `,(0,c.jsx)(n.code,{children:`useFigmaFrameSelection`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaFrameSelection } from '@dxtmisha/figma-ref'

const { 
  selection,    // Список выделенных фреймов (ComputedRef)
  setSelection, // Метод для смены выделения: setSelection(id)
  loading       // Состояние загрузки
} = useFigmaFrameSelection()
`})}),`
`,(0,c.jsx)(n.h4,{id:`прямое-управление-javascript`,children:`Прямое управление (JavaScript)`}),`
`,(0,c.jsx)(n.p,{children:`Если вы не используете Vue, можно отправить команду или вручную подписаться на изменения:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { sendFrameSelection, fetchFrameSelection } from '@dxtmisha/figma'

// Сменить выделение
sendFrameSelection('12:34')

// Подписаться на изменения вручную
fetchFrameSelection((selection) => {
  console.log('Текущее выделение:', selection)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};