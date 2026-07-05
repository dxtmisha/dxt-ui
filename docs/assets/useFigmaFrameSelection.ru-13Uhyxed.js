import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-ref/Composables/useFigmaFrameSelection - Наблюдение за выделением фреймов (полная инфо)`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmaframeselection`,children:(0,c.jsx)(n.code,{children:`useFigmaFrameSelection`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable для получения и наблюдения за подробным списком фреймов, выделенных в данный момент в Figma. В отличие от `,(0,c.jsx)(n.code,{children:`useFigmaUiSelected`}),` (который управляет только ID в интерфейсе), этот composable предоставляет полную информацию о выделении, включая имена и скриншоты, подписываясь на события `,(0,c.jsx)(n.code,{children:`selectionchange`}),` в Figma.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selection: ComputedRef<UiFigmaFramesList>`}),` — вычисляемая ссылка на список выделенных фреймов (имена, ID и скриншоты).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSelection(id: string): void`}),` — метод для программной смены выделения в Figma на конкретный элемент.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ComputedRef<boolean>`}),` — реактивный флаг, указывающий на процесс получения данных о выделении.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaFrameSelection } from '@dxtmisha/figma-ref'

const { selection, setSelection, loading } = useFigmaFrameSelection()

// 'selection' обновляется каждый раз, когда пользователь меняет выделение в Figma
// 'setSelection' можно использовать для программного изменения выделения:
setSelection('12:34')
`})}),`
`,(0,c.jsx)(n.h2,{id:`типы-данных`,children:`Типы данных`}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframesitem`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`})}),`
`,(0,c.jsx)(n.p,{children:`Представляет упрощенный элемент фрейма для пользовательского интерфейса.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Название фрейма.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Уникальный идентификатор элемента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: Uint8Array | string`}),` — Изображение фрейма (опционально).`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframeslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Список объектов типа `,(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};