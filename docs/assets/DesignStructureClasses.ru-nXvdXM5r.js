import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignStructureClasses - Разрешитель CSS-классов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designstructureclasses`,children:`Класс DesignStructureClasses`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignStructureClasses`}),` отвечает за преобразование структурных метаданных компонента в плоский список определений CSS-классов. Он идентифицирует специфические токены, помеченные как подклассы, и рекурсивно строит имена классов в соответствии с соглашениями об именовании BEM (Block Element Modifier), обеспечивая согласованность архитектуры стилей всей дизайн-системы.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивное обнаружение классов`}),` — глубоко обходит деревья свойств для поиска вложенных элементов и модификаторов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Построение BEM-имен`}),` — автоматически объединяет идентификаторы родителя и потомка, используя двойное подчеркивание (`,(0,c.jsx)(n.code,{children:`__`}),`) для элементов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Индексация в CamelCase`}),` — генерирует чистые, удобные для переменных имена для использования в логике TypeScript/Vue.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка полных имен`}),` — позволяет специфическим токенам игнорировать родительские иерархии и использовать глобальные имена классов, когда это необходимо.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматизированный маппинг свойств`}),` — напрямую интегрируется со стандартными метаданными свойств для определения того, какие элементы вносят вклад в API стилизации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Для инициализации разрешителя классов укажите базовое имя компонента. Класс автоматически загрузит связанные структурные метаданные через свою родительскую абстракцию.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` — идентификатор компонента для обработки (например, `,(0,c.jsx)(n.code,{children:`'button'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignStructureClasses } from '@dxtmisha/scripts'

const resolver = new DesignStructureClasses('button')
const classes = resolver.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`информация`,children:`Информация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): DesignStructureClassesList`}),` — возвращает полностью обработанный список объектов маппинга классов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`рабочий-процесс-разрешения-классов`,children:`Рабочий процесс разрешения классов`}),`
`,(0,c.jsx)(n.p,{children:`При инициализации класс автоматически выполняет логику разрешения:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Анализ свойств`}),`: движок сканирует список `,(0,c.jsx)(n.code,{children:`PropertyItem`}),` компонента на наличие тегов, указывающих на тип `,(0,c.jsx)(n.code,{children:`subclass`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Построение пространства имен`}),`: он отслеживает иерархию имен. Например, `,(0,c.jsx)(n.code,{children:`label`}),` внутри `,(0,c.jsx)(n.code,{children:`button`}),` становится `,(0,c.jsx)(n.code,{children:`button__label`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Структурирование данных`}),`: для каждого идентифицированного класса создается объект, содержащий:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`index`}),`: CamelCase версия имени (например, `,(0,c.jsx)(n.code,{children:`buttonLabel`}),`) для ссылок в коде.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`className`}),`: фактическая строка CSS-класса (например, `,(0,c.jsx)(n.code,{children:`button__label`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`full`}),`: флаг, указывающий, является ли имя абсолютным глобальным классом.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Плоская структура`}),`: рекурсивное дерево преобразуется в одномерный массив, обеспечивая быстрый поиск для движков шаблонов.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`интеграция-с-генераторами-кода`,children:`Интеграция с генераторами кода`}),`
`,(0,c.jsxs)(n.p,{children:[`Этот класс предоставляет важный маппинг, используемый `,(0,c.jsx)(n.code,{children:`DesignReplace`}),` для внедрения определений классов в реализации компонентов. Централизуя логику именования, он гарантирует, что изменения в соглашениях об именовании могут быть применены глобально ко всем компонентам без ручного редактирования файлов.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};