import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/functional/Composables/useTranslateRef - Локализация и перевод"}),`
`,n.jsx(e.h1,{id:"usetranslateref",children:n.jsx(e.code,{children:"useTranslateRef"})}),`
`,n.jsx(e.p,{children:"Composable для получения реактивных переводов на основе ключей или массива ключей. Он автоматически обновляется при изменении языка приложения."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"names: (string | string[])[]"})," — строка или массив ключей для перевода."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Возвращает:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ShallowRef<TranslateList<T>>"})," — поверхностная реактивная ссылка, содержащая переведенные тексты."]}),`
`]}),`
`,n.jsx(e.h2,{id:"пример-использования",children:"Пример использования"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useTranslateRef, t } from '@dxtmisha/functional'

// Базовое использование
const translations = useTranslateRef(['home.title', 'home.description'])

// Использование сокращения 't'
const labels = t(['button.save', 'button.cancel'])

// В шаблоне: <h1>{{ translations['home.title'] }}</h1>
`})})]})}function m(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{m as default};
