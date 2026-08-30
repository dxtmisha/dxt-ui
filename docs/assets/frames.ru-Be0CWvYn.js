import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/3. Figma/2. Работа с фреймами`}),`
`,(0,c.jsx)(t.h1,{id:`работа-с-фреймами`,children:`Работа с фреймами`}),`
`,(0,c.jsx)(t.p,{children:`Библиотека предоставляет инструменты для управления списком фреймов на текущей странице Figma и отслеживания выбранных элементов. Это позволяет строить сложные интерфейсы навигации и системы массового выбора внутри плагина.`}),`
`,(0,c.jsx)(t.h2,{id:`бэкенд-backend--plugincodets`,children:`Бэкенд (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(t.p,{children:`Для автоматической синхронизации данных о фреймах необходимо инициализировать соответствующие обработчики на стороне плагина.`}),`
`,(0,c.jsx)(t.h3,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaTopLevelFrames, FigmaFramesSelected } from '@dxtmisha/figma-code'

// Активация слушателей списка фреймов и управления выбором
FigmaTopLevelFrames.send()
FigmaFramesSelected.send()
`})}),`
`,(0,c.jsx)(t.h2,{id:`интерфейс-ui--iframe`,children:`Интерфейс (UI / Iframe)`}),`
`,(0,c.jsx)(t.p,{children:`В интерфейсе доступны данные о всех фреймах страницы и инструменты для управления внутренним списком выбора плагина.`}),`
`,(0,c.jsx)(t.h3,{id:`список-фреймов-страницы-vue`,children:`Список фреймов страницы (Vue)`}),`
`,(0,c.jsx)(t.p,{children:`Позволяет получить список всех фреймов и секций в корне текущей страницы со скриншотами.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

const { frames, loading } = useFigmaUiFrames()

/* frames.value содержит список объектов:
  {
    id: string,
    name: string,
    image: Uint8Array | string // Скриншот JPG
  }
*/
`})}),`
`,(0,c.jsx)(t.h3,{id:`выбранные-элементы-плагина-vue`,children:`Выбранные элементы плагина (Vue)`}),`
`,(0,c.jsx)(t.p,{children:`Механизм для отслеживания и изменения списка «выбранных» элементов внутри интерфейса плагина. Это состояние сохраняется глобально на уровне сессии плагина.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { 
  selected,       // Список ID выбранных фреймов
  isSelected,     // Функция проверки: isSelected(id)
  toggleSelected, // Функция переключения: toggleSelected(id, boolean)
} = useFigmaUiSelected()

// Пример использования:
const active = isSelected('1:123')
const toggle = () => toggleSelected('1:123', !active.value)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};