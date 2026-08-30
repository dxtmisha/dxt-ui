import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToReplace - Преобразование строк регулярными выражениями`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestoreplace`,children:`Класс PropertiesToReplace`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToReplace`}),` преобразует строковые значения токенов дизайна с помощью регулярных выражений, заданных конфигурацией `,(0,c.jsx)(t.code,{children:`replace`}),`. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Регулярные выражения`}),` — Оценивает критерии соответствия регулярных выражений и переопределяет значения токенов обработанным выводом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Гибкие варианты конфигурации`}),` — Поддерживает как короткие строки шаблонов, так и подробные объекты конфигурации `,(0,c.jsx)(t.code,{children:`PropertyReplace`}),` (определяющие шаблон, флаги и строки замены).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасная очистка`}),` — Удаляет временный флаг директивы `,(0,c.jsx)(t.code,{children:`replace`}),` из свойств токена после успешного преобразования целевого значения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет обновленные сопоставления токенов в файл кэша `,(0,c.jsx)(t.code,{children:`001-replace`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToReplace, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToReplace(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-преобразования-и-утилиты`,children:`Операции преобразования и утилиты`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для прохода по всем свойствам, обнаружения строковых значений с директивой `,(0,c.jsx)(t.code,{children:`replace`}),` и выполнения преобразований.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getInfo(info: PropertiesReplaceValue): PropertyReplace`}),` — Нормализует входящие короткие шаблоны строк или подробные конфигурации в структурированные объекты `,(0,c.jsx)(t.code,{children:`PropertyReplace`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValue(info: PropertyReplace, value: string): string`}),` — Выполняет замену по регулярному выражению, возвращая преобразованную строку.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};