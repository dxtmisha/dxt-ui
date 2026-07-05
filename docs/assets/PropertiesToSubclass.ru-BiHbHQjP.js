import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToSubclass - Преобразование селекторов подклассов BEM`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestosubclass`,children:`Класс PropertiesToSubclass`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToSubclass`}),` преобразует токены дизайна, обозначающие подклассы (типа `,(0,c.jsx)(n.code,{children:`PropertyType.subclass`}),`), во вложенные селекторы классов элементов BEM (такие как `,(0,c.jsx)(n.code,{children:`&__subclass`}),`). Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез селекторов BEM`}),` — Преобразует узлы токенов подклассов во вложенные в родителя селекторы элементов SCSS (`,(0,c.jsx)(n.code,{children:`&__element`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Определение иерархии`}),` — Проверяет уровни предков, чтобы убедиться, что классы BEM вложены правильно в соответствии со структурами компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет сопоставление селекторов подклассов в файл кэша `,(0,c.jsx)(n.code,{children:`036-subclass`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToSubclass, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSubclass(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`жизненный-цикл-и-вспомогательные-методы`,children:`Жизненный цикл и вспомогательные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для поиска всех переменных типа `,(0,c.jsx)(n.code,{children:`subclass`}),` и перезаписи их селекторов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isParentState(parents: PropertyItemsItem['parents']): boolean`}),` — Определяет, является ли непосредственный родительский элемент в пути контейнером состояния или модификатора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Разрешает селектор подкласса, добавляя форматирование BEM (`,(0,c.jsx)(n.code,{children:`&__`}),` или `,(0,c.jsx)(n.code,{children:`& .`}),`) на основе конфигурации верхнего уровня и путей предков.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};