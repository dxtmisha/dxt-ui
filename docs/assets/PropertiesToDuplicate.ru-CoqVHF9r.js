import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToDuplicate - Детектор дубликатов токенов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestoduplicate`,children:`Класс PropertiesToDuplicate`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToDuplicate`}),` сканирует дерево токенов дизайна для поиска идентичных структур или групп значений, помечая дублирующиеся узлы для стимулирования их повторного использования. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поиск идентичных узлов`}),` — Сравнивает сериализованные строковые значения конфигураций токенов, содержащих 5 или более ключей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Группировка дубликатов`}),` — Группирует идентичные объекты и выводит общее имя в формате camelCase, отражающее их логическую связь.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Пометка метаданными`}),` — Записывает ссылку `,(0,c.jsx)(t.code,{children:`duplicate`}),` в элементы, что позволяет другим процессорам предлагать оптимизацию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет отчеты о дубликатах в файл кэша `,(0,c.jsx)(t.code,{children:`910-duplicate`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToDuplicate, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToDuplicate(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-обнаружения`,children:`Операции обнаружения`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для запуска проверки дубликатов и применения пометок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(properties: PropertiesDuplicateItem['properties']): string`}),` — Форматирует групповое имя в camelCase, используя уникальные части путей продублированных элементов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findDuplicate(list: PropertiesDuplicateList, valueDuplicate: string): PropertiesDuplicateList`}),` — Обходит список кандидатов-конфигураций для поиска совпадений с целевой строкой дубликата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initList(): PropertiesDuplicateList`}),` — Сканирует все дерево токенов для построения плоской карты сложных конфигураций (содержащих >= 5 ключей) для сравнения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initDuplicate(list: PropertiesDuplicateList): PropertiesDuplicate`}),` — Объединяет совпадающие записи в разгруппированные наборы.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};