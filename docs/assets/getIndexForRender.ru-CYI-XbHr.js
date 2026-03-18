import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(d){const e={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/ru/functional/Functions/getIndexForRender - Генерация ключа для рендеринга"}),`
`,n.jsx(e.h1,{id:"getindexforrender",children:n.jsx(e.code,{children:"getIndexForRender"})}),`
`,n.jsxs(e.p,{children:["Утилитарная функция, используемая для генерации уникального ключа (",n.jsx(e.code,{children:"key"}),") компонента. Ключ формируется ",n.jsx(e.strong,{children:"аддитивно"}),": все идентифицированные части (включая имя компонента) соединяются через точку."]}),`
`,n.jsx(e.h3,{id:"параметры",children:"Параметры:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string | any"})," — Имя или тег компонента (база ключа)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"props?: T"})," — Свойства компонента (используются для извлечения ",n.jsx(e.code,{children:"index"}),", ",n.jsx(e.code,{children:"class"})," и ",n.jsx(e.code,{children:"id"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index?: string"})," — Необязательный внешний индекс."]}),`
`]}),`
`,n.jsx(e.h3,{id:"возвращает",children:"Возвращает:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"string | undefined"})," — Сгенерированный составной ключ или ",n.jsx(e.code,{children:"undefined"}),", если ключ не может быть сгенерирован."]}),`
`,n.jsx(e.h3,{id:"примеры-генерации",children:"Примеры генерации:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getIndexForRender } from '@dxtmisha/functional'

// 1. Только имя
getIndexForRender('li') 
// => '.li'

// 2. Имя + внешний индекс
getIndexForRender('div', {}, 'row-1') 
// => '.div.row-1'

// 3. Имя + индекс из props + класс + id
getIndexForRender('button', { 
  index: 'primary', 
  class: 'btn-large', 
  id: 'submit-01' 
}) 
// => '.button.primary.btn-large.submit-01'

// 4. Полный набор (внешний аргумент + всё из props)
getIndexForRender('span', { 
  index: 'p-idx', 
  class: 'text-red', 
  id: 'id-99' 
}, 'arg-idx') 
// => '.span.arg-idx.p-idx.text-red.id-99'

// 5. Пустой случай
getIndexForRender(undefined)
// => undefined
`})}),`
`,n.jsx(e.h3,{id:"логика-сборки-ключа",children:"Логика сборки ключа"}),`
`,n.jsx(e.p,{children:"Ключ собирается по цепочке:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:".name"})})," (если ",n.jsx(e.code,{children:"name"})," является строкой)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"+ .index"})," (если передан аргумент ",n.jsx(e.code,{children:"index"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"+ .props.index"})," (если есть в свойствах и является строкой)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"+ .className"})," (если есть в свойствах)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"+ .props.id"})," (if present in properties)"]}),`
`]})]})}function j(d={}){const{wrapper:e}={...r(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(i,{...d})}):i(d)}export{j as default};
