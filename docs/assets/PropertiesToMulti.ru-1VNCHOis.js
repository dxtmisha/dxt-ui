import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToMulti - Преобразование свойств с множеством значений`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestomulti`,children:`Класс PropertiesToMulti`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToMulti`}),` преобразует токены дизайна, содержащие несколько пользовательских свойств или состояний, в стандартизированные структуры, где значения сгруппированы под соответствующими именами ключей. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Преобразование множественных значений`}),` — Находит свойства с типом `,(0,c.jsx)(t.code,{children:`property`}),`, содержащие сложные вложенные значения, и реструктурирует их.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Продвижение состояний`}),` — Разрешает базовые значения (такие как переменные или состояния) и сопоставляет их со структурами модификаторов состояний.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет преобразованные структуры в файл кэша `,(0,c.jsx)(t.code,{children:`012-multi`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToMulti, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToMulti(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-преобразования`,children:`Операции преобразования`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для получения свойств с несколькими значениями и перезаписи их дочерних элементов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): PropertyItemsItem[]`}),` — Фильтрует все активные элементы, возвращая только переменные свойств, которые обладают непустыми сложными объектами значений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(name: string, properties: PropertyList, isVar: boolean): void`}),` — Реструктурирует дочерние значения, переводя их свойства в структуры состояний и корректируя тип выходного свойства на основе `,(0,c.jsx)(t.code,{children:`isVar`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};