import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-ref/Composables/useFigmaUiFrames - Наблюдение за фреймами верхнего уровня`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmauiframes`,children:(0,c.jsx)(t.code,{children:`useFigmaUiFrames`})}),`
`,(0,c.jsx)(t.p,{children:`Composable для получения и наблюдения за списком фреймов и секций верхнего уровня на текущей странице Figma. Использует глобальное кэширование для обеспечения согласованности данных между несколькими экземплярами компонентов.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`frames: ComputedRef<UiFigmaFramesList>`}),` — вычисляемая ссылка на список фреймов (имена, ID и скриншоты).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: ComputedRef<boolean>`}),` — реактивный флаг, указывающий на процесс получения списка фреймов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

const { frames, loading } = useFigmaUiFrames()

// 'frames' содержит список объектов фреймов с визуальным предпросмотром
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};