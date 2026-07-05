import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToVariable - Разрешение типов свойств токенов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestovariable`,children:`Класс PropertiesToVariable`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToVariable`}),` анализирует свойства в дереве токенов дизайна для динамического разрешения и назначения соответствующих им классификаций `,(0,c.jsx)(n.code,{children:`PropertyType`}),` на основе иерархии, имен и значений. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамический вывод типов`}),` — Назначает токенам точные флаги типов свойств (например, `,(0,c.jsx)(n.code,{children:`var`}),`, `,(0,c.jsx)(n.code,{children:`property`}),`, `,(0,c.jsx)(n.code,{children:`selector`}),`, `,(0,c.jsx)(n.code,{children:`subclass`}),`, `,(0,c.jsx)(n.code,{children:`none`}),`), сопоставляя их со списками совместимости CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Иерархическая классификация`}),` — Обходит родительские узлы для наследования классификаций и разрешает оболочки компонентов и дизайна верхнего уровня.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Определение селекторов и псевдоэлементов`}),` — Сопоставляет имена токенов со списками стандартных селекторов и псевдоэлементов CSS (таких как `,(0,c.jsx)(n.code,{children:`:hover`}),`, `,(0,c.jsx)(n.code,{children:`::before`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет разрешенные типы переменных в файл кэша `,(0,c.jsx)(n.code,{children:`008-variable`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToVariable, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToVariable(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-разрешения-типов`,children:`Операции разрешения типов`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для итерации по всем свойствам и назначения разрешенных классификаций типов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCategory(item: PropertyItem): PropertyType | undefined`}),` — Выводит тип на основе категорий, таких как `,(0,c.jsx)(n.code,{children:`root`}),` или `,(0,c.jsx)(n.code,{children:`theme`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByMain(design: string, component: string | undefined, name: string): PropertyType | undefined`}),` — Проверяет, представляет ли токен основную оболочку дизайна или пространства имен компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByProperty(name: string): PropertyType | undefined`}),` — Сопоставляет имя токена со стандартным списком свойств CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBySelector(name: string): PropertyType | undefined`}),` — Сопоставляет имя токена со стандартными псевдоклассами CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBySubclass(item: PropertyItem): PropertyType | undefined`}),` — Идентифицирует структуры подклассов на основе пустых конфигураций.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByVarParent(parent?: PropertyItem): PropertyType | undefined`}),` — Наследует классификацию `,(0,c.jsx)(n.code,{children:`var`}),`, если родительский элемент имеет тип переменной.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByNone(item: PropertyItem): PropertyType | undefined`}),` — Возвращает тип `,(0,c.jsx)(n.code,{children:`none`}),`, если токен имеет явную конфигурацию скрытого типа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByVirtual(name: string): PropertyType | undefined`}),` — Сопоставляет имя токена со стандартными псевдоэлементами CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findType(name: string, item: PropertyItem): PropertyType`}),` — Центральный оркестратор, запускающий все дочерние сопоставители для определения окончательного типа свойства.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};