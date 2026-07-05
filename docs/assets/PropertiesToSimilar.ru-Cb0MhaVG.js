import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToSimilar - Наследование атрибутов родственных токенов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestosimilar`,children:`Класс PropertiesToSimilar`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToSimilar`}),` ищет на родительских уровнях дерева токенов дизайна похожие свойства (с совпадающими именами) для наследования их типов и правил переименования. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Наследование атрибутов`}),` — Позволяет токенам наследовать форматы переименования и переменные свойств из совпадающих путей предков.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фильтрация исключений`}),` — Автоматически блокирует наследование от узлов, обозначенных как пространства имен `,(0,c.jsx)(n.code,{children:`classType`}),` или `,(0,c.jsx)(n.code,{children:`subclass`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Восходящий поиск`}),` — Рекурсивно сканирует родительские элементы в обратном порядке (снизу вверх) для поиска подходящих атрибутов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет обновленную структуру токенов в файл кэша `,(0,c.jsx)(n.code,{children:`010-similar`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToSimilar, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSimilar(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-наследования`,children:`Операции наследования`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для обхода всех свойств и применения унаследованных значений от предков.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParent(name: string, item: PropertyItem, parents: PropertyItemsParent[]): PropertyItem | undefined`}),` — Оценивает совпадающие родительские структуры для поиска кандидата на наследование атрибутов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(item: PropertyItem): boolean`}),` — Проверяет, подходит ли элемент токена (является ли переменной или свойством) для наследования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isException(item?: PropertyItem): boolean`}),` — Возвращает true, если тип токена соответствует одному из заблокированных исключений пространств имен.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};