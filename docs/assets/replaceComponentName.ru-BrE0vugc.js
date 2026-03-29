import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/replaceComponentName - Замена имени компонента в тексте`}),`
`,(0,c.jsx)(n.h1,{id:`replacecomponentname`,children:(0,c.jsx)(n.code,{children:`replaceComponentName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Заменяет HTML-теги определенного компонента в текстовой строке на новые. Выполняет поиск открывающих (`,(0,c.jsx)(n.code,{children:`<name`}),`) и закрывающих (`,(0,c.jsx)(n.code,{children:`</name`}),`) тегов без учета регистра и заменяет их на `,(0,c.jsx)(n.code,{children:`componentName`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string | undefined`}),` — Исходный текст.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Имя компонента, которое нужно заменить.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`componentName: string`}),` — Новое имя компонента.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string | undefined`}),` — Измененный текст с новыми тегами или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если исходный текст не был передан.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { replaceComponentName } from '@dxtmisha/functional-basic'

const template = '<Button>Нажми меня</Button>'
console.log(replaceComponentName(template, 'Button', 'AppButton')) 
// '<AppButton>Нажми меня</AppButton>'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};