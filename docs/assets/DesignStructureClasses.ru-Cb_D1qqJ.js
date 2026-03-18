import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(i,{title:"@dxtmisha/ru/scripts/Classes/DesignStructureClasses - Разрешитель CSS-классов"}),`
`,s.jsx(n.h1,{id:"класс-designstructureclasses",children:"Класс DesignStructureClasses"}),`
`,s.jsxs(n.p,{children:["Класс ",s.jsx(n.code,{children:"DesignStructureClasses"})," отвечает за преобразование структурных метаданных компонента в плоский список определений CSS-классов. Он идентифицирует специфические токены, помеченные как подклассы, и рекурсивно строит имена классов в соответствии с соглашениями об именовании BEM (Block Element Modifier), обеспечивая согласованность архитектуры стилей всей дизайн-системы."]}),`
`,s.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Рекурсивное обнаружение классов"})," — глубоко обходит деревья свойств для поиска вложенных элементов и модификаторов."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Построение BEM-имен"})," — автоматически объединяет идентификаторы родителя и потомка, используя двойное подчеркивание (",s.jsx(n.code,{children:"__"}),") для элементов."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Индексация в CamelCase"})," — генерирует чистые, удобные для переменных имена для использования в логике TypeScript/Vue."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Поддержка полных имен"})," — позволяет специфическим токенам игнорировать родительские иерархии и использовать глобальные имена классов, когда это необходимо."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Автоматизированный маппинг свойств"})," — напрямую интегрируется со стандартными метаданными свойств для определения того, какие элементы вносят вклад в API стилизации."]}),`
`]}),`
`,s.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,s.jsx(n.p,{children:"Для инициализации разрешителя классов укажите базовое имя компонента. Класс автоматически загрузит связанные структурные метаданные через свою родительскую абстракцию."}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Параметры:"})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"component: string"})," — идентификатор компонента для обработки (например, ",s.jsx(n.code,{children:"'button'"}),")."]}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-typescript",children:`import { DesignStructureClasses } from '@dxtmisha/scripts'

const resolver = new DesignStructureClasses('button')
const classes = resolver.get()
`})}),`
`,s.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,s.jsx(n.h3,{id:"информация",children:"Информация"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"get(): DesignStructureClassesList"})," — возвращает полностью обработанный список объектов маппинга классов."]}),`
`]}),`
`,s.jsx(n.h2,{id:"операции",children:"Операции"}),`
`,s.jsx(n.h3,{id:"рабочий-процесс-разрешения-классов",children:"Рабочий процесс разрешения классов"}),`
`,s.jsx(n.p,{children:"При инициализации класс автоматически выполняет логику разрешения:"}),`
`,s.jsxs(n.ol,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Анализ свойств"}),": движок сканирует список ",s.jsx(n.code,{children:"PropertyItem"})," компонента на наличие тегов, указывающих на тип ",s.jsx(n.code,{children:"subclass"}),"."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Построение пространства имен"}),": он отслеживает иерархию имен. Например, ",s.jsx(n.code,{children:"label"})," внутри ",s.jsx(n.code,{children:"button"})," становится ",s.jsx(n.code,{children:"button__label"}),"."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Структурирование данных"}),": для каждого идентифицированного класса создается объект, содержащий:",`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"index"}),": CamelCase версия имени (например, ",s.jsx(n.code,{children:"buttonLabel"}),") для ссылок в коде."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"className"}),": фактическая строка CSS-класса (например, ",s.jsx(n.code,{children:"button__label"}),")."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"full"}),": флаг, указывающий, является ли имя абсолютным глобальным классом."]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Плоская структура"}),": рекурсивное дерево преобразуется в одномерный массив, обеспечивая быстрый поиск для движков шаблонов."]}),`
`]}),`
`,s.jsx(n.h3,{id:"интеграция-с-генераторами-кода",children:"Интеграция с генераторами кода"}),`
`,s.jsxs(n.p,{children:["Этот класс предоставляет важный маппинг, используемый ",s.jsx(n.code,{children:"DesignReplace"})," для внедрения определений классов в реализации компонентов. Централизуя логику именования, он гарантирует, что изменения в соглашениях об именовании могут быть применены глобально ко всем компонентам без ручного редактирования файлов."]})]})}function j(e={}){const{wrapper:n}={...l(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(r,{...e})}):r(e)}export{j as default};
