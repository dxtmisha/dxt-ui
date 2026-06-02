import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI Figma/# Работа с фреймами`}),`
`,(0,c.jsx)(n.h1,{id:`работа-с-фреймами`,children:`Работа с фреймами`}),`
`,(0,c.jsx)(n.p,{children:`Библиотека предоставляет инструменты для управления списком фреймов на текущей странице Figma и отслеживания выбранных элементов. Это позволяет строить сложные интерфейсы навигации и системы массового выбора внутри плагина.`}),`
`,(0,c.jsx)(n.h2,{id:`бэкенд-backend--plugincodets`,children:`Бэкенд (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(n.p,{children:`Для автоматической синхронизации данных о фреймах необходимо инициализировать соответствующие обработчики на стороне плагина.`}),`
`,(0,c.jsx)(n.h3,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaTopLevelFrames, FigmaFramesSelected } from '@dxtmisha/figma-code'

// Активация слушателей списка фреймов и управления выбором
FigmaTopLevelFrames.send()
FigmaFramesSelected.send()
`})}),`
`,(0,c.jsx)(n.h2,{id:`интерфейс-ui--iframe`,children:`Интерфейс (UI / Iframe)`}),`
`,(0,c.jsx)(n.p,{children:`В интерфейсе доступны данные о всех фреймах страницы и инструменты для управления внутренним списком выбора плагина.`}),`
`,(0,c.jsx)(n.h3,{id:`список-фреймов-страницы-vue`,children:`Список фреймов страницы (Vue)`}),`
`,(0,c.jsx)(n.p,{children:`Позволяет получить список всех фреймов и секций в корне текущей страницы со скриншотами.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

const { frames, loading } = useFigmaUiFrames()

/* frames.value содержит список объектов:
  {
    id: string,
    name: string,
    image: Uint8Array | string // Скриншот JPG
  }
*/
`})}),`
`,(0,c.jsx)(n.h3,{id:`выбранные-элементы-плагина-vue`,children:`Выбранные элементы плагина (Vue)`}),`
`,(0,c.jsx)(n.p,{children:`Механизм для отслеживания и изменения списка «выбранных» элементов внутри интерфейса плагина. Это состояние сохраняется глобально на уровне сессии плагина.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { 
  selected,       // Список ID выбранных фреймов
  isSelected,     // Функция проверки: isSelected(id)
  toggleSelected, // Функция переключения: toggleSelected(id, boolean)
} = useFigmaUiSelected()

// Пример использования:
const active = isSelected('1:123')
const toggle = () => toggleSelected('1:123', !active.value)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};