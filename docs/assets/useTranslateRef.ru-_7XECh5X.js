import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useTranslateRef - Локализация и перевод`}),`
`,(0,c.jsx)(t.h1,{id:`usetranslateref`,children:(0,c.jsx)(t.code,{children:`useTranslateRef`})}),`
`,(0,c.jsx)(t.p,{children:`Composable для получения реактивных переводов на основе ключей или массива ключей. Он автоматически обновляется при изменении языка приложения.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`names: (string | string[])[]`}),` — строка или массив ключей для перевода.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ShallowRef<TranslateList<T>>`}),` — поверхностная реактивная ссылка, содержащая переведенные тексты.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useTranslateRef, t } from '@dxtmisha/functional'

// Базовое использование
const translations = useTranslateRef(['home.title', 'home.description'])

// Использование сокращения 't'
const labels = t(['button.save', 'button.cancel'])

// В шаблоне: <h1>{{ translations['home.title'] }}</h1>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};