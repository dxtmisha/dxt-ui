import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Functions/replaceComponentName - Замена имени компонента в тексте"}),`
`,n.jsx(e.h1,{id:"replacecomponentname",children:n.jsx(e.code,{children:"replaceComponentName"})}),`
`,n.jsxs(e.p,{children:["Заменяет HTML-теги определенного компонента в текстовой строке на новые. Выполняет поиск открывающих (",n.jsx(e.code,{children:"<name"}),") и закрывающих (",n.jsx(e.code,{children:"</name"}),") тегов без учета регистра и заменяет их на ",n.jsx(e.code,{children:"componentName"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"text: string | undefined"})," — Исходный текст."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — Имя компонента, которое нужно заменить."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"componentName: string"})," — Новое имя компонента."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"string | undefined"})," — Измененный текст с новыми тегами или ",n.jsx(e.code,{children:"undefined"}),", если исходный текст не был передан."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { replaceComponentName } from '@dxtmisha/functional-basic'

const template = '<Button>Нажми меня</Button>'
console.log(replaceComponentName(template, 'Button', 'AppButton')) 
// '<AppButton>Нажми меня</AppButton>'
`})})]})}function a(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{a as default};
