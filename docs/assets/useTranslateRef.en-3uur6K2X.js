import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useTranslateRef - Localization and translation`}),`
`,(0,c.jsx)(t.h1,{id:`usetranslateref`,children:(0,c.jsx)(t.code,{children:`useTranslateRef`})}),`
`,(0,c.jsx)(t.p,{children:`Composable for obtaining reactive translations based on keys or an array of keys. It automatically updates when the application language changes.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`names: (string | string[])[]`}),` — a string or an array of keys for translation.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ShallowRef<TranslateList<T>>`}),` — a shallow reactive reference containing the translated texts.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useTranslateRef, t } from '@dxtmisha/functional'

// Basic usage
const translations = useTranslateRef(['home.title', 'home.description'])

// Using shorthand 't'
const labels = t(['button.save', 'button.cancel'])

// In template: <h1>{{ translations['home.title'] }}</h1>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};