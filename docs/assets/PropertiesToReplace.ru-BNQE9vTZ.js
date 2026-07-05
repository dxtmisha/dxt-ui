import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToReplace - Преобразование строк регулярными выражениями`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestoreplace`,children:`Класс PropertiesToReplace`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToReplace`}),` преобразует строковые значения токенов дизайна с помощью регулярных выражений, заданных конфигурацией `,(0,c.jsx)(n.code,{children:`replace`}),`. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Регулярные выражения`}),` — Оценивает критерии соответствия регулярных выражений и переопределяет значения токенов обработанным выводом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкие варианты конфигурации`}),` — Поддерживает как короткие строки шаблонов, так и подробные объекты конфигурации `,(0,c.jsx)(n.code,{children:`PropertyReplace`}),` (определяющие шаблон, флаги и строки замены).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасная очистка`}),` — Удаляет временный флаг директивы `,(0,c.jsx)(n.code,{children:`replace`}),` из свойств токена после успешного преобразования целевого значения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет обновленные сопоставления токенов в файл кэша `,(0,c.jsx)(n.code,{children:`001-replace`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToReplace, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToReplace(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-преобразования-и-утилиты`,children:`Операции преобразования и утилиты`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для прохода по всем свойствам, обнаружения строковых значений с директивой `,(0,c.jsx)(n.code,{children:`replace`}),` и выполнения преобразований.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInfo(info: PropertiesReplaceValue): PropertyReplace`}),` — Нормализует входящие короткие шаблоны строк или подробные конфигурации в структурированные объекты `,(0,c.jsx)(n.code,{children:`PropertyReplace`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getValue(info: PropertyReplace, value: string): string`}),` — Выполняет замену по регулярному выражению, возвращая преобразованную строку.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};