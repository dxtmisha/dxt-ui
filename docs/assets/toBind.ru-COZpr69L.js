import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const e={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/functional/Functions/toBind - Глубокое объединение свойств"}),`
`,n.jsx(e.h1,{id:"tobind",children:n.jsx(e.code,{children:"toBind"})}),`
`,n.jsxs(e.p,{children:["Объединяет два объекта свойств, интеллектуально обрабатывая свойства ",n.jsx(e.code,{children:"class"})," и ",n.jsx(e.code,{children:"style"}),". Если оба объекта содержат классы или стили, они объединяются в массив для предотвращения перезаписи. Другие свойства из второго объекта (",n.jsx(e.code,{children:"value"}),") перезапишут свойства в первом объекте (",n.jsx(e.code,{children:"extra"}),")."]}),`
`,n.jsx(e.h3,{id:"как-это-работает-механизм-слияния",children:"Как это работает (Механизм слияния)"}),`
`,n.jsx(e.p,{children:"Функция принимает два объекта и возвращает новый объект, объединяя их свойства по следующим правилам:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обычные свойства:"})," Свойства из второго объекта (",n.jsx(e.code,{children:"value"}),") заменяют свойства с таким же именем из первого объекта (",n.jsx(e.code,{children:"extra"}),"). Это стандартное поведение оператора spread (",n.jsx(e.code,{children:"..."}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Свойство ",n.jsx(e.code,{children:"class"}),":"]})," Если свойство ",n.jsx(e.code,{children:"class"})," присутствует ",n.jsx(e.strong,{children:"только в одном"})," из объектов, оно переносится как есть. Если же класс указан ",n.jsx(e.strong,{children:"в обоих"})," объектах, функция не перезаписывает их, а объединяет в массив ",n.jsx(e.code,{children:"[extra.class, value.class]"}),". Это позволяет сохранить все классы, переданные в компонент."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Свойство ",n.jsx(e.code,{children:"style"}),":"]})," Работает аналогично классам. Присутствие стилей в обоих объектах приведет к их объединению в массив ",n.jsx(e.code,{children:"[extra.style, value.style]"}),", что необходимо для корректного применения всех стилей средствами Vue."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"extra: ItemList"})," — Базовый объект свойств (например, свойства по умолчанию или внутренние)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: ItemList"})," — Объект свойств для объединения с базовым (например, пользовательские свойства)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"ConstrBind<R>"})," — Объединенный объект свойств."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { toBind } from '@dxtmisha/functional'

const base = { class: 'btn', style: { color: 'red' }, id: 'my-btn' }
const mod = { class: 'btn--large', style: { margin: '10px' }, id: 'primary-btn' }

const result = toBind(base, mod)
/* 
Результат: { 
  id: 'primary-btn', 
  class: ['btn', 'btn--large'], 
  style: [{ color: 'red' }, { margin: '10px' }] 
}
*/
`})})]})}function a(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{a as default};
