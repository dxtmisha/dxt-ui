import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToProperty - Преобразование пользовательских свойств CSS`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestoproperty`,children:`Класс PropertiesToProperty`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToProperty`}),` форматирует токены дизайна, представляющие стандартные CSS-свойства (такие как background, padding, margin), в нормализованные селекторы свойств в формате kebab-case. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToVar`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Форматирование CSS-свойств`}),` — Преобразует имена свойств в ключи разметки в формате kebab-case.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Унаследованный функционал`}),` — Использует всю логику вычисления переменных, прозрачности и разрешения значений из родительского класса `,(0,c.jsx)(t.code,{children:`PropertiesToVar`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет свойства в файл кэша `,(0,c.jsx)(t.code,{children:`024-property`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToProperty, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToProperty(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`вспомогательные-методы`,children:`Вспомогательные методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName({ name, item }: PropertyItemsItem): string`}),` — Переопределяет метод разрешения имени для возврата нормализованного имени свойства в формате kebab-case.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};