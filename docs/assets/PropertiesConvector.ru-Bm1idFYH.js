import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesConvector - Трансформер семантических токенов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiesconvector`,children:`Класс PropertiesConvector`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesConvector`}),` — это специализированная статическая утилита, предназначенная для выполнения сложных семантических преобразований токенов дизайна. Он выступает в роли диспетчера для движка обработки токенов, определяя специфические типы свойств (такие как цвета, тени или типографика) и применяя специализированную логику преобразования для нормализации необработанных данных в пригодные для использования структуры дизайн-системы.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Семантическая диспетчеризация`}),` — автоматически направляет токены в специализированные конвертеры на основе метаданных их `,(0,c.jsx)(t.code,{children:`type`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Рекурсивный обход`}),` — глубоко обходит вложенные объекты свойств, гарантируя обработку всех дочерних токенов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Специализированные конвертеры`}),` — интегрирует выделенную логику для `,(0,c.jsx)(t.code,{children:`color`}),`, `,(0,c.jsx)(t.code,{children:`boxShadow`}),`, `,(0,c.jsx)(t.code,{children:`fontFamilies`}),` и `,(0,c.jsx)(t.code,{children:`typography`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Преобразование «на месте»`}),` — напрямую модифицирует объекты свойств для сохранения структурной целостности в процессе сборки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Являясь статической утилитой, `,(0,c.jsx)(t.code,{children:`PropertiesConvector`}),` не требует создания экземпляра. Доступ к его основной функции осуществляется напрямую.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesConvector } from '@dxtmisha/scripts'

// Преобразование набора необработанных свойств
PropertiesConvector.to(rawProperties)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`трансформация`,children:`Трансформация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to(properties): void`}),` — рекурсивно обрабатывает список свойств, применяя специфические для типа преобразования к каждому элементу.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`поток-диспетчеризации-преобразования`,children:`Поток диспетчеризации преобразования`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesConvector`}),` управляет жизненным циклом трансформации через стратегию рекурсивного сопоставления:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Определение типа`}),`: Для каждого элемента в предоставленном кластере свойств класс проверяет наличие соответствующего конвертера во внутреннем реестре (например, сопоставление `,(0,c.jsx)(t.code,{children:`color`}),` с `,(0,c.jsx)(t.code,{children:`convectorColor`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Специализированное выполнение`}),`: Если совпадение найдено, на элементе выполняется логика конкретного конвертера, преобразующая необработанные значения в финальные форматы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Рекурсивное ветвление`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Если у элемента есть `,(0,c.jsx)(t.code,{children:`value`}),`, являющееся объектом, класс рекурсивно вызывает `,(0,c.jsx)(t.code,{children:`to()`}),` для этого объекта.`]}),`
`,(0,c.jsx)(t.li,{children:`Если сам элемент является объектом без распознанного типа, он продолжает обход для поиска вложенных токенов.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Целостность данных`}),`: Процесс гарантирует, что сложные структуры (такие как карты типографики или многослойные тени) будут полностью разрешены перед следующим этапом конвейера.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};