import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Functions/getConstructorProperties - Получение свойств конструкторов`}),`
`,(0,c.jsx)(t.h1,{id:`getconstructorproperties`,children:(0,c.jsx)(t.code,{children:`getConstructorProperties`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция возвращает свойства указанных конструкторов, считывая их файлы `,(0,c.jsx)(t.code,{children:`properties.json`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`names: string[]`}),` — список названий конструкторов.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`PropertyList`}),` — объект, где ключи — названия конструкторов, а значения — их свойства.`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция перебирает переданные имена и формирует путь к файлу `,(0,c.jsx)(t.code,{children:`properties.json`}),` для каждого конструктора. Для загрузки данных используется метод `,(0,c.jsx)(t.code,{children:`PropertiesFile.readFile`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getConstructorProperties } from '@dxtmisha/scripts'

const properties = getConstructorProperties(['Button', 'Input'])
// { Button: { ... }, Input: { ... } }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};