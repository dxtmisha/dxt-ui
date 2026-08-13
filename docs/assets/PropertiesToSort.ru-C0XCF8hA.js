import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToSort - Сортировка дерева токенов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestosort`,children:`Класс PropertiesToSort`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToSort`}),` упорядочивает и сортирует элементы в дереве токенов дизайна в соответствии с предопределенными правилами, категориями, переменными и именами. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сортировка на основе правил`}),` — Сортирует свойства дизайна с использованием правил порядка, определенных в `,(0,c.jsx)(t.code,{children:`sortList`}),` на основе переменных и категорий.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Иерархическое упорядочивание`}),` — Рекурсивно сортирует вложенные значения и дочерние ветки внутри контейнерных узлов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синтез индексов`}),` — Назначает вычисленный числовой приоритет каждому токену для выполнения сортировки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет отсортированное дерево свойств в файл кэша `,(0,c.jsx)(t.code,{children:`048-sort`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToSort, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSort(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-сортировки`,children:`Операции сортировки`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для запуска сортировки структуры токенов дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(properties?: PropertyItemsItem): PropertyList`}),` — Рекурсивно обходит свойства и сортирует их дочерние массивы и значения свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCategoryName(item: PropertyItem): string`}),` — Возвращает форматированную строку категории.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getKeys(item: PropertyItem): Item<number>`}),` — Возвращает строку индекса сортировки и вычисляет числовое значение веса порядка на основе правил `,(0,c.jsx)(t.code,{children:`sortList`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`join(data: PropertiesSortList): PropertyList`}),` — Выполняет окончательную сортировку массива по весу/порядку и сопоставляет элементы обратно в отсортированный объект.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};