import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToVariable - Разрешение типов свойств токенов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestovariable`,children:`Класс PropertiesToVariable`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToVariable`}),` анализирует свойства в дереве токенов дизайна для динамического разрешения и назначения соответствующих им классификаций `,(0,c.jsx)(t.code,{children:`PropertyType`}),` на основе иерархии, имен и значений. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамический вывод типов`}),` — Назначает токенам точные флаги типов свойств (например, `,(0,c.jsx)(t.code,{children:`var`}),`, `,(0,c.jsx)(t.code,{children:`property`}),`, `,(0,c.jsx)(t.code,{children:`selector`}),`, `,(0,c.jsx)(t.code,{children:`subclass`}),`, `,(0,c.jsx)(t.code,{children:`none`}),`), сопоставляя их со списками совместимости CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Иерархическая классификация`}),` — Обходит родительские узлы для наследования классификаций и разрешает оболочки компонентов и дизайна верхнего уровня.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Определение селекторов и псевдоэлементов`}),` — Сопоставляет имена токенов со списками стандартных селекторов и псевдоэлементов CSS (таких как `,(0,c.jsx)(t.code,{children:`:hover`}),`, `,(0,c.jsx)(t.code,{children:`::before`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет разрешенные типы переменных в файл кэша `,(0,c.jsx)(t.code,{children:`008-variable`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToVariable, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToVariable(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-разрешения-типов`,children:`Операции разрешения типов`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для итерации по всем свойствам и назначения разрешенных классификаций типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByCategory(item: PropertyItem): PropertyType | undefined`}),` — Выводит тип на основе категорий, таких как `,(0,c.jsx)(t.code,{children:`root`}),` или `,(0,c.jsx)(t.code,{children:`theme`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByMain(design: string, component: string | undefined, name: string): PropertyType | undefined`}),` — Проверяет, представляет ли токен основную оболочку дизайна или пространства имен компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByProperty(name: string): PropertyType | undefined`}),` — Сопоставляет имя токена со стандартным списком свойств CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getBySelector(name: string): PropertyType | undefined`}),` — Сопоставляет имя токена со стандартными псевдоклассами CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getBySubclass(item: PropertyItem): PropertyType | undefined`}),` — Идентифицирует структуры подклассов на основе пустых конфигураций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByVarParent(parent?: PropertyItem): PropertyType | undefined`}),` — Наследует классификацию `,(0,c.jsx)(t.code,{children:`var`}),`, если родительский элемент имеет тип переменной.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByNone(item: PropertyItem): PropertyType | undefined`}),` — Возвращает тип `,(0,c.jsx)(t.code,{children:`none`}),`, если токен имеет явную конфигурацию скрытого типа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByVirtual(name: string): PropertyType | undefined`}),` — Сопоставляет имя токена со стандартными псевдоэлементами CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findType(name: string, item: PropertyItem): PropertyType`}),` — Центральный оркестратор, запускающий все дочерние сопоставители для определения окончательного типа свойства.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};