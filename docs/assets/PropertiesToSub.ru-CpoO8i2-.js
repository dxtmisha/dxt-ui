import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToSub - Разрешение вложенных выражений интерполяции значений`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestosub`,children:`Класс PropertiesToSub`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToSub`}),` рекурсивно разрешает вложенные выражения интерполяции в фигурных скобках (такие как `,(0,c.jsx)(n.code,{children:`calc({ref.width} * 2)`}),`) внутри значений токенов. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение вложенных значений`}),` — Рекурсивно разрешает вложенные фигурные скобки, содержащие ссылки на переменные, внутри более крупных строковых значений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Защита от циклов`}),` — Ограничивает операции поиска до 24 итераций во избежание бесконечных циклов в циклических определениях.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Очистка фигурных скобок`}),` — Автоматически удаляет внешние фигурные скобки, если для токена установлено значение `,(0,c.jsx)(n.code,{children:`fullValue`}),` равное true.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет разрешенные подзначения в файл кэша `,(0,c.jsx)(n.code,{children:`006-sub`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToSub, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSub(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-разрешения`,children:`Операции разрешения`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для поиска и разрешения всех свойств с подзначениями.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(value: PropertyItem['value']): boolean`}),` — Возвращает true, если значение токена содержит вложенный шаблон фигурных скобок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getValue(design: string, component: string, value: string): string`}),` — Итеративно разрешает маркеры интерполяции фигурных скобок, используя глобальный реестр элементов свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read({ design, component, item }: PropertyItemsItem): void`}),` — Разрешает подзначения для одного элемента свойства и удаляет фигурные скобки, если установлен флаг `,(0,c.jsx)(n.code,{children:`fullValue`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};