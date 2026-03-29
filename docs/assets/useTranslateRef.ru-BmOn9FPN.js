import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Composables/useTranslateRef - Локализация и перевод`}),`
`,(0,c.jsx)(n.h1,{id:`usetranslateref`,children:(0,c.jsx)(n.code,{children:`useTranslateRef`})}),`
`,(0,c.jsx)(n.p,{children:`Composable для получения реактивных переводов на основе ключей или массива ключей. Он автоматически обновляется при изменении языка приложения.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`names: (string | string[])[]`}),` — строка или массив ключей для перевода.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ShallowRef<TranslateList<T>>`}),` — поверхностная реактивная ссылка, содержащая переведенные тексты.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useTranslateRef, t } from '@dxtmisha/functional'

// Базовое использование
const translations = useTranslateRef(['home.title', 'home.description'])

// Использование сокращения 't'
const labels = t(['button.save', 'button.cancel'])

// В шаблоне: <h1>{{ translations['home.title'] }}</h1>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};