import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToDuplicate - Детектор дубликатов токенов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestoduplicate`,children:`Класс PropertiesToDuplicate`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToDuplicate`}),` сканирует дерево токенов дизайна для поиска идентичных структур или групп значений, помечая дублирующиеся узлы для стимулирования их повторного использования. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поиск идентичных узлов`}),` — Сравнивает сериализованные строковые значения конфигураций токенов, содержащих 5 или более ключей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Группировка дубликатов`}),` — Группирует идентичные объекты и выводит общее имя в формате camelCase, отражающее их логическую связь.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Пометка метаданными`}),` — Записывает ссылку `,(0,c.jsx)(n.code,{children:`duplicate`}),` в элементы, что позволяет другим процессорам предлагать оптимизацию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет отчеты о дубликатах в файл кэша `,(0,c.jsx)(n.code,{children:`910-duplicate`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToDuplicate, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToDuplicate(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-обнаружения`,children:`Операции обнаружения`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для запуска проверки дубликатов и применения пометок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(properties: PropertiesDuplicateItem['properties']): string`}),` — Форматирует групповое имя в camelCase, используя уникальные части путей продублированных элементов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findDuplicate(list: PropertiesDuplicateList, valueDuplicate: string): PropertiesDuplicateList`}),` — Обходит список кандидатов-конфигураций для поиска совпадений с целевой строкой дубликата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initList(): PropertiesDuplicateList`}),` — Сканирует все дерево токенов для построения плоской карты сложных конфигураций (содержащих >= 5 ключей) для сравнения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initDuplicate(list: PropertiesDuplicateList): PropertiesDuplicate`}),` — Объединяет совпадающие записи в разгруппированные наборы.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};