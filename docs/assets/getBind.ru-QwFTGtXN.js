import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional/Functions/getBind - Генерация привязок"}),`
`,n.jsx(e.h1,{id:"getbind",children:n.jsx(e.code,{children:"getBind"})}),`
`,n.jsx(e.p,{children:"Базовая утилитарная функция для генерации объекта свойств для подкомпонента на основе обычных (нереактивных) значений. Она обрабатывает различные типы входных данных и обеспечивает согласованную структуру для привязки свойств."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T | R | undefined | null"})," — Входное значение для привязки. Может быть примитивом или объектом."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"nameExtra: ItemList | string = {}"})," — Дополнительные свойства для объединения или имя свойства, если ",n.jsx(e.code,{children:"value"})," не является объектом."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string = 'value'"})," — Имя свойства по умолчанию (по умолчанию ",n.jsx(e.code,{children:"'value'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"except: boolean = false"})," — Если true, пропускает проверку на наличие первичного ключа в объекте ",n.jsx(e.code,{children:"value"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"ConstrBind<R>"})," — Объект, содержащий свойства, готовые к привязке."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getBind } from '@dxtmisha/functional'

// Вариант 1: Простое значение
const bind1 = getBind('Привет', {}, 'label') 
// Результат: { label: 'Привет' }

// Вариант 2: Объект с дополнительными свойствами
const bind2 = getBind({ id: 1 }, { class: 'active' }, 'data')
// Результат: { id: 1, class: 'active' }
`})})]})}function h(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{h as default};
