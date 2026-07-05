import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToSort - Сортировка дерева токенов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestosort`,children:`Класс PropertiesToSort`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToSort`}),` упорядочивает и сортирует элементы в дереве токенов дизайна в соответствии с предопределенными правилами, категориями, переменными и именами. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сортировка на основе правил`}),` — Сортирует свойства дизайна с использованием правил порядка, определенных в `,(0,c.jsx)(n.code,{children:`sortList`}),` на основе переменных и категорий.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Иерархическое упорядочивание`}),` — Рекурсивно сортирует вложенные значения и дочерние ветки внутри контейнерных узлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез индексов`}),` — Назначает вычисленный числовой приоритет каждому токену для выполнения сортировки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет отсортированное дерево свойств в файл кэша `,(0,c.jsx)(n.code,{children:`048-sort`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToSort, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSort(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-сортировки`,children:`Операции сортировки`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для запуска сортировки структуры токенов дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(properties?: PropertyItemsItem): PropertyList`}),` — Рекурсивно обходит свойства и сортирует их дочерние массивы и значения свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCategoryName(item: PropertyItem): string`}),` — Возвращает форматированную строку категории.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getKeys(item: PropertyItem): Item<number>`}),` — Возвращает строку индекса сортировки и вычисляет числовое значение веса порядка на основе правил `,(0,c.jsx)(n.code,{children:`sortList`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`join(data: PropertiesSortList): PropertyList`}),` — Выполняет окончательную сортировку массива по весу/порядку и сопоставляет элементы обратно в отсортированный объект.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};