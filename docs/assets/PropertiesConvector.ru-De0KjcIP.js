import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/scripts/Classes/PropertiesConvector - Трансформер семантических токенов"}),`
`,n.jsx(e.h1,{id:"класс-propertiesconvector",children:"Класс PropertiesConvector"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"PropertiesConvector"})," — это специализированная статическая утилита, предназначенная для выполнения сложных семантических преобразований токенов дизайна. Он выступает в роли диспетчера для движка обработки токенов, определяя специфические типы свойств (такие как цвета, тени или типографика) и применяя специализированную логику преобразования для нормализации необработанных данных в пригодные для использования структуры дизайн-системы."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Семантическая диспетчеризация"})," — автоматически направляет токены в специализированные конвертеры на основе метаданных их ",n.jsx(e.code,{children:"type"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Рекурсивный обход"})," — глубоко обходит вложенные объекты свойств, гарантируя обработку всех дочерних токенов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Специализированные конвертеры"})," — интегрирует выделенную логику для ",n.jsx(e.code,{children:"color"}),", ",n.jsx(e.code,{children:"boxShadow"}),", ",n.jsx(e.code,{children:"fontFamilies"})," и ",n.jsx(e.code,{children:"typography"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Преобразование «на месте»"})," — напрямую модифицирует объекты свойств для сохранения структурной целостности в процессе сборки."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Являясь статической утилитой, ",n.jsx(e.code,{children:"PropertiesConvector"})," не требует создания экземпляра. Доступ к его основной функции осуществляется напрямую."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PropertiesConvector } from '@dxtmisha/scripts'

// Преобразование набора необработанных свойств
PropertiesConvector.to(rawProperties)
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"трансформация",children:"Трансформация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"to(properties): void"})," — рекурсивно обрабатывает список свойств, применяя специфические для типа преобразования к каждому элементу."]}),`
`]}),`
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"поток-диспетчеризации-преобразования",children:"Поток диспетчеризации преобразования"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"PropertiesConvector"})," управляет жизненным циклом трансформации через стратегию рекурсивного сопоставления:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Определение типа"}),": Для каждого элемента в предоставленном кластере свойств класс проверяет наличие соответствующего конвертера во внутреннем реестре (например, сопоставление ",n.jsx(e.code,{children:"color"})," с ",n.jsx(e.code,{children:"convectorColor"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Специализированное выполнение"}),": Если совпадение найдено, на элементе выполняется логика конкретного конвертера, преобразующая необработанные значения в финальные форматы."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Рекурсивное ветвление"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Если у элемента есть ",n.jsx(e.code,{children:"value"}),", являющееся объектом, класс рекурсивно вызывает ",n.jsx(e.code,{children:"to()"})," для этого объекта."]}),`
`,n.jsx(e.li,{children:"Если сам элемент является объектом без распознанного типа, он продолжает обход для поиска вложенных токенов."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Целостность данных"}),": Процесс гарантирует, что сложные структуры (такие как карты типографики или многослойные тени) будут полностью разрешены перед следующим этапом конвейера."]}),`
`]})]})}function j(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};
