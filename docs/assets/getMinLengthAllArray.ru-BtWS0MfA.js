import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getMinLengthAllArray - Минимальная длина в массиве`}),`
`,(0,c.jsx)(t.h1,{id:`getminlengthallarray`,children:(0,c.jsx)(t.code,{children:`getMinLengthAllArray`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита, которая находит самую короткую строку в предоставленном массиве и возвращает её длину (число). Функция использует встроенный `,(0,c.jsx)(t.code,{children:`Math.min`}),` в сочетании с `,(0,c.jsx)(t.code,{children:`getLengthOfAllArray`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ObjectOrArray<string>`}),` — Входной массив строк.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — Длина самой короткой строки массива. Если передан пустой массив, вернется `,(0,c.jsx)(t.code,{children:`Infinity`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getMinLengthAllArray } from '@dxtmisha/functional-basic'

const words = ['компьютер', 'код', 'программирование']
const minLength = getMinLengthAllArray(words)

console.log(minLength) // 3 ("код")
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};