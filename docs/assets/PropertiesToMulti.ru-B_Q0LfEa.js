import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToMulti - Преобразование свойств с множеством значений`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestomulti`,children:`Класс PropertiesToMulti`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToMulti`}),` преобразует токены дизайна, содержащие несколько пользовательских свойств или состояний, в стандартизированные структуры, где значения сгруппированы под соответствующими именами ключей. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Преобразование множественных значений`}),` — Находит свойства с типом `,(0,c.jsx)(n.code,{children:`property`}),`, содержащие сложные вложенные значения, и реструктурирует их.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Продвижение состояний`}),` — Разрешает базовые значения (такие как переменные или состояния) и сопоставляет их со структурами модификаторов состояний.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет преобразованные структуры в файл кэша `,(0,c.jsx)(n.code,{children:`012-multi`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToMulti, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToMulti(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-преобразования`,children:`Операции преобразования`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для получения свойств с несколькими значениями и перезаписи их дочерних элементов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): PropertyItemsItem[]`}),` — Фильтрует все активные элементы, возвращая только переменные свойств, которые обладают непустыми сложными объектами значений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(name: string, properties: PropertyList, isVar: boolean): void`}),` — Реструктурирует дочерние значения, переводя их свойства в структуры состояний и корректируя тип выходного свойства на основе `,(0,c.jsx)(n.code,{children:`isVar`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};