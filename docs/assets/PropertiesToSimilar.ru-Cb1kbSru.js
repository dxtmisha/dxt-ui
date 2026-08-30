import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToSimilar - Наследование атрибутов родственных токенов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestosimilar`,children:`Класс PropertiesToSimilar`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToSimilar`}),` ищет на родительских уровнях дерева токенов дизайна похожие свойства (с совпадающими именами) для наследования их типов и правил переименования. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Наследование атрибутов`}),` — Позволяет токенам наследовать форматы переименования и переменные свойств из совпадающих путей предков.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Фильтрация исключений`}),` — Автоматически блокирует наследование от узлов, обозначенных как пространства имен `,(0,c.jsx)(t.code,{children:`classType`}),` или `,(0,c.jsx)(t.code,{children:`subclass`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Восходящий поиск`}),` — Рекурсивно сканирует родительские элементы в обратном порядке (снизу вверх) для поиска подходящих атрибутов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет обновленную структуру токенов в файл кэша `,(0,c.jsx)(t.code,{children:`010-similar`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToSimilar, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSimilar(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-наследования`,children:`Операции наследования`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для обхода всех свойств и применения унаследованных значений от предков.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getParent(name: string, item: PropertyItem, parents: PropertyItemsParent[]): PropertyItem | undefined`}),` — Оценивает совпадающие родительские структуры для поиска кандидата на наследование атрибутов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(item: PropertyItem): boolean`}),` — Проверяет, подходит ли элемент токена (является ли переменной или свойством) для наследования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isException(item?: PropertyItem): boolean`}),` — Возвращает true, если тип токена соответствует одному из заблокированных исключений пространств имен.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};