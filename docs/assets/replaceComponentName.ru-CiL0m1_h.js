import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/replaceComponentName - Замена имени компонента в тексте`}),`
`,(0,c.jsx)(t.h1,{id:`replacecomponentname`,children:(0,c.jsx)(t.code,{children:`replaceComponentName`})}),`
`,(0,c.jsxs)(t.p,{children:[`Заменяет HTML-теги определенного компонента в текстовой строке на новые. Выполняет поиск открывающих (`,(0,c.jsx)(t.code,{children:`<name`}),`) и закрывающих (`,(0,c.jsx)(t.code,{children:`</name`}),`) тегов без учета регистра и заменяет их на `,(0,c.jsx)(t.code,{children:`componentName`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: string | undefined`}),` — Исходный текст.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Имя компонента, которое нужно заменить.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`componentName: string`}),` — Новое имя компонента.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string | undefined`}),` — Измененный текст с новыми тегами или `,(0,c.jsx)(t.code,{children:`undefined`}),`, если исходный текст не был передан.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { replaceComponentName } from '@dxtmisha/functional-basic'

const template = '<Button>Нажми меня</Button>'
console.log(replaceComponentName(template, 'Button', 'AppButton')) 
// '<AppButton>Нажми меня</AppButton>'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};