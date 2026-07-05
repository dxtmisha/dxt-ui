import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToProperty - Преобразование пользовательских свойств CSS`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestoproperty`,children:`Класс PropertiesToProperty`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToProperty`}),` форматирует токены дизайна, представляющие стандартные CSS-свойства (такие как background, padding, margin), в нормализованные селекторы свойств в формате kebab-case. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToVar`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Форматирование CSS-свойств`}),` — Преобразует имена свойств в ключи разметки в формате kebab-case.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Унаследованный функционал`}),` — Использует всю логику вычисления переменных, прозрачности и разрешения значений из родительского класса `,(0,c.jsx)(n.code,{children:`PropertiesToVar`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет свойства в файл кэша `,(0,c.jsx)(n.code,{children:`024-property`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToProperty, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToProperty(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`вспомогательные-методы`,children:`Вспомогательные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName({ name, item }: PropertyItemsItem): string`}),` — Переопределяет метод разрешения имени для возврата нормализованного имени свойства в формате kebab-case.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};