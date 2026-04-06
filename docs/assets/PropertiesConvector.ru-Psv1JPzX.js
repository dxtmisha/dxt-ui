import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesConvector - Трансформер семантических токенов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiesconvector`,children:`Класс PropertiesConvector`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesConvector`}),` — это специализированная статическая утилита, предназначенная для выполнения сложных семантических преобразований токенов дизайна. Он выступает в роли диспетчера для движка обработки токенов, определяя специфические типы свойств (такие как цвета, тени или типографика) и применяя специализированную логику преобразования для нормализации необработанных данных в пригодные для использования структуры дизайн-системы.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Семантическая диспетчеризация`}),` — автоматически направляет токены в специализированные конвертеры на основе метаданных их `,(0,c.jsx)(n.code,{children:`type`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивный обход`}),` — глубоко обходит вложенные объекты свойств, гарантируя обработку всех дочерних токенов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Специализированные конвертеры`}),` — интегрирует выделенную логику для `,(0,c.jsx)(n.code,{children:`color`}),`, `,(0,c.jsx)(n.code,{children:`boxShadow`}),`, `,(0,c.jsx)(n.code,{children:`fontFamilies`}),` и `,(0,c.jsx)(n.code,{children:`typography`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Преобразование «на месте»`}),` — напрямую модифицирует объекты свойств для сохранения структурной целостности в процессе сборки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Являясь статической утилитой, `,(0,c.jsx)(n.code,{children:`PropertiesConvector`}),` не требует создания экземпляра. Доступ к его основной функции осуществляется напрямую.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesConvector } from '@dxtmisha/scripts'

// Преобразование набора необработанных свойств
PropertiesConvector.to(rawProperties)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`трансформация`,children:`Трансформация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to(properties): void`}),` — рекурсивно обрабатывает список свойств, применяя специфические для типа преобразования к каждому элементу.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`поток-диспетчеризации-преобразования`,children:`Поток диспетчеризации преобразования`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesConvector`}),` управляет жизненным циклом трансформации через стратегию рекурсивного сопоставления:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Определение типа`}),`: Для каждого элемента в предоставленном кластере свойств класс проверяет наличие соответствующего конвертера во внутреннем реестре (например, сопоставление `,(0,c.jsx)(n.code,{children:`color`}),` с `,(0,c.jsx)(n.code,{children:`convectorColor`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Специализированное выполнение`}),`: Если совпадение найдено, на элементе выполняется логика конкретного конвертера, преобразующая необработанные значения в финальные форматы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивное ветвление`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Если у элемента есть `,(0,c.jsx)(n.code,{children:`value`}),`, являющееся объектом, класс рекурсивно вызывает `,(0,c.jsx)(n.code,{children:`to()`}),` для этого объекта.`]}),`
`,(0,c.jsx)(n.li,{children:`Если сам элемент является объектом без распознанного типа, он продолжает обход для поиска вложенных токенов.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Целостность данных`}),`: Процесс гарантирует, что сложные структуры (такие как карты типографики или многослойные тени) будут полностью разрешены перед следующим этапом конвейера.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};