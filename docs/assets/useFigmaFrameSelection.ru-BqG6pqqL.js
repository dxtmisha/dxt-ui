import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-ref/Composables/useFigmaFrameSelection - Наблюдение за выделением фреймов (полная инфо)`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmaframeselection`,children:(0,c.jsx)(t.code,{children:`useFigmaFrameSelection`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable для получения и наблюдения за подробным списком фреймов, выделенных в данный момент в Figma. В отличие от `,(0,c.jsx)(t.code,{children:`useFigmaUiSelected`}),` (который управляет только ID в интерфейсе), этот composable предоставляет полную информацию о выделении, включая имена и скриншоты, подписываясь на события `,(0,c.jsx)(t.code,{children:`selectionchange`}),` в Figma.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selection: ComputedRef<UiFigmaFramesList>`}),` — вычисляемая ссылка на список выделенных фреймов (имена, ID и скриншоты).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSelection(id: string): void`}),` — метод для программной смены выделения в Figma на конкретный элемент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: ComputedRef<boolean>`}),` — реактивный флаг, указывающий на процесс получения данных о выделении.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaFrameSelection } from '@dxtmisha/figma-ref'

const { selection, setSelection, loading } = useFigmaFrameSelection()

// 'selection' обновляется каждый раз, когда пользователь меняет выделение в Figma
// 'setSelection' можно использовать для программного изменения выделения:
setSelection('12:34')
`})}),`
`,(0,c.jsx)(t.h2,{id:`типы-данных`,children:`Типы данных`}),`
`,(0,c.jsx)(t.h4,{id:`uifigmaframesitem`,children:(0,c.jsx)(t.code,{children:`UiFigmaFramesItem`})}),`
`,(0,c.jsx)(t.p,{children:`Представляет упрощенный элемент фрейма для пользовательского интерфейса.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Название фрейма.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — Уникальный идентификатор элемента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: Uint8Array | string`}),` — Изображение фрейма (опционально).`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`uifigmaframeslist`,children:(0,c.jsx)(t.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Список объектов типа `,(0,c.jsx)(t.code,{children:`UiFigmaFramesItem`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};